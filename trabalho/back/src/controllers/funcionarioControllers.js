const mysql = require('mysql')

conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
})

function listarFuncionarios(req, res) {
    let query = "SELECT * FROM funcionarios";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

function cadastrarFuncionario(req, res) {
    let query = `INSERT INTO funcionarios VALUES (${req.body.id_func},'${req.body.nome}','${req.body.cargo}', '${req.body.email}', '${req.body.senha}')`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    }) 
}

function excluirFuncionario(req, res) {
    let query = `DELETE FROM funcionarios WHERE id_func = '${req.body.id_func}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


function editarFuncionario(req, res) {
    let query = `UPDATE funcionarios SET id_func = ${req.body.id_func}, nome = '${req.body.nome}',cargo = '${req.body.cargo}', email = '${req.body.email}', senha = '${req.body.senha}' WHERE id_func = '${req.body.id_func}'`;
    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarFuncionarios,
    cadastrarFuncionario,
    excluirFuncionario,
    editarFuncionario
}