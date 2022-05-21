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
            usuario:req.body.usuario,
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

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});