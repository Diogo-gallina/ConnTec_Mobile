

//index.js
(async () => {
    const database = require('./src/components/db');
    const User = require('./src/models/exemplo');

    try {
        const resultado = await database.sync();

        const user = await User.create({
            Usuario: 'cesar1123',
            email: 'cesar@gmail.com',
            nome: 'César Adriano',
            senha: '1235',
            tipoUsuario: 'U',
            status: 'Sei la Meu',
        })
        
    
        
    } catch (error) {
        console.log(error);
    }
})();