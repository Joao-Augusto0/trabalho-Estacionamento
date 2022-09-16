const mysql = require('mysql')

conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
})

function listarCLientes(req, res) {
    let query = "SELECT * FROM clientes";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

function cadastrarClientes(req, res) {
    // let data = new Date()
    let query = `INSERT INTO clientes VALUES ('${req.body.cpf}', '${req.body.nome}', '${req.body.telefone}', '${req.body.endereco}')`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

function excluirClientes(req, res) {
    let query = `DELETE FROM clientes WHERE cpf = '${req.body.cpf}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


function editarClientes(req, res) {
    let query = `UPDATE clientes SET cpf = '${req.body.cpf}', nome = '${req.body.nome}', telefone = '${req.body.telefone}', endereco = '${req.body.endereco}' WHERE cpf = '${req.body.cpf}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarCLientes,
    cadastrarClientes,
    excluirClientes,
    editarClientes
}