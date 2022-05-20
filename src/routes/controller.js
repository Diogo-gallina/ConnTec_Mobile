const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('../../models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuario=models.usuario;

app.post('/login',async (req,res)=>{
    let response=await user.findOne({
        where:{email:req.body.email, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});