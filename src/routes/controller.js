const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('../../models');
const { Op } = require("sequelize");

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuarios=models.usuarios;
let token=models.token;

app.post('/login',async (req,res)=>{
    let response=await usuarios.findOne({
        where:{email:req.body.email, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
        console.log(response)
    }
});

app.post('/cadastro',async (req,res)=>{
    let response = await usuarios.create({
            email: req.body.email,
            nome: req.body.name,
            senha: req.body.senha,
            
        });

    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
        console.log(response)
    }
});

//Grava o token no banco
app.post('/token',async(req,res)=>{
    let response=await token.findOne({
        where:{token:req.body.token}
    });
    if(response == null){
        token.create({
            token: req.body.token,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});