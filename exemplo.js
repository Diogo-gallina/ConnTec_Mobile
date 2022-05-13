//index.js
(async () => {
    const database = require('./src/components/db');
    const User = require('./src/models/exemplo');

    try {
        const resultado = await database.sync();

        const user = await User.create({
            idUsuario: '1',
            usuario: 'Diogodiis',
            email: 'diogo@gmail.com',
            nome: 'Diogo Correia Campos',
            senha: 'diogo123',
            tipoUsuario: 'U',
            status: 'Eu sou lindo',
        })
        
    
        
    } catch (error) {
        console.log(error);
    }
})();