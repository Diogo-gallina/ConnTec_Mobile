const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models");
const { Expo } = require("expo-server-sdk");
const { engine } = require("express-handlebars");

let expo = new Expo();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("assets"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

let usuarios = models.usuarios;
let token = models.token;

//Faz a logica de login
app.post("/login", async (req, res) => {
  let response = await usuarios.findOne({
    where: { email: req.body.email, senha: req.body.senha },
  });
  if (response === null) {
    res.send(JSON.stringify("error"));
  } else {
    res.send(response);
  }
});

//Faz a logica de cadastro
app.post("/cadastro", async (req, res) => {
  let response = await usuarios.create({
    email: req.body.email,
    nome: req.body.name,
    senha: req.body.senha,
  });

  if (response === null) {
    res.send(JSON.stringify("error"));
  } else {
    res.send(response);
  }
});

//Grava o token no banco
app.post("/token", async (req, res) => {
  let response = await token.findOne({
    where: { token: req.body.token },
  });
  if (response == null) {
    token.create({
      token: req.body.token,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
});

//Entrar na web para mandar notificações
app.get("/", async (req, res) => {
  let response = await token.findAll({
    raw: true,
  });
  res.render("mensagem", { users: response });
});

//Logica de notificações
app.post("/notifications", async (req, res) => {
  let messages = [];
  let somePushTokens = [];

  let response = await token.findAll({
    raw: true,
  });
  response.map((elem, ind, obj) => {
    somePushTokens.push(elem.token);
  });

  for (let pushToken of somePushTokens) {
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error(`Push token ${pushToken} não é um push valido`);
      continue;
    }

    messages.push({
      to: pushToken,
      sound: "default",
      title: req.body.title,
      body: req.body.message,
    });
  }
  let chunks = expo.chunkPushNotifications(messages);
  let tickets = [];
  (async () => {
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        console.error(error);
      }
    }
  })();
  let receiptIds = [];
  for (let ticket of tickets) {
    if (ticket.id) {
      receiptIds.push(ticket.id);
    }
  }

  let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
  (async () => {
    for (let chunk of receiptIdChunks) {
      try {
        let receipts = await expo.getPushNotificationReceiptsAsync(chunk);

        for (let receiptId in receipts) {
          let { status, message, details } = receipts[receiptId];
          if (status === "ok") {
            continue;
          } else if (status === "error") {
            console.error(`Erro ao mandar notificação: ${message}`);
            if (details && details.error) {
              console.error(`O erro do codigo é: ${details.error}`);
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  })();
});

//inicia o servidor na porta 3000
let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando");
});
