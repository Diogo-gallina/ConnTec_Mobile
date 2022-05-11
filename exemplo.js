//index.js
(async () => {
    const database = require('./src/components/db');
    const Amigos = require('./src/models/exemplo');

    try {
        const resultado = await database.sync();

        const amigos = await Amigos.create({
            nome: 'Pedro',
            preco: 0,
            descricao: 'Pedro'
        })
        
    
        
    } catch (error) {
        console.log(error);
    }
})();