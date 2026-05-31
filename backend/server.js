const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tarefas', (req, res) => {
    db.query('SELECT * FROM tarefas', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.post('/tarefas', (req, res) => {
    const { titulo, descricao } = req.body;
    db.query('INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)', [titulo, descricao], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ mensagem: 'Tarefa adicionada com sucesso!', id: result.insertId });
    });
});

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tarefas WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ mensagem: 'Tarefa removida!' });
    });
});

app.listen(3001, () => {
    console.log('Servidor backend rodando em http://localhost:3001');
});