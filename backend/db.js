const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Por padrão no XAMPP é vazio
    database: 'gerenciador_tarefas'
});

module.exports = connection;