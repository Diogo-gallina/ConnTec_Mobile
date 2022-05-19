const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('../../models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let usuario=models.usuario;

app.get('/create',async (req,res)=>{
    let create=await usuario.create({
        name: "joao",
        password: "abc",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read', async (req,res)=>{
    let read=await usuario.findAll({
        raw:true,
    });
    console.log(read);
    res.send(read)
});

app.get('/update', async (req,res)=> {
    let update=await usuario.findByPk(2,
        {include:[{all:true}]}
        ).then((response)=>{
            response.Trackings[0].local='Nova Cidade';
            response.Trackings[0].save();
    });
});

app.get('/delete', async (req,res)=> {
    usuario.destroy({
        where: {idUsuario:119}
    });
    res.send('Usuario deleteado com sucesso');
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});