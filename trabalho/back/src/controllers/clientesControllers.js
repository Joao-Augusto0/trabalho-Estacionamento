const Item = require('../models/item')
const con = require('../models/estacionamentoDAO')

const listarCLientes = (req, res) => {
    let query = "SELECT * FROM clientes";

    con.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

const cadastrarClientes = (req, res) => {
    let query = `INSERT INTO clientes VALUES ('${req.body.cpf}', '${req.body.nome}', '${req.body.telefone}', '${req.body.endereco}')`;

    con.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const excluirClientes = (req, res) => {
    let query = `DELETE FROM clientes WHERE cpf = '${req.body.cpf}'`;

    con.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


const editarClientes = (req, res) => {
    let query = `UPDATE clientes SET cpf = '${req.body.cpf}', nome = '${req.body.nome}', telefone = '${req.body.telefone}', endereco = '${req.body.endereco}' WHERE cpf = '${req.body.cpf}'`;

    con.query(query, (err, result) => {
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