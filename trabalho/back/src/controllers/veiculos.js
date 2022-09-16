const mysql = require('mysql')

conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
})

function listarVeiculos(req, res) {
    let query = "SELECT * FROM veiculos";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

function cadastrarVeiculo(req, res) {
    // let data = new Date()
    let query = `INSERT INTO veiculos VALUES ('${req.body.placa}', '${req.body.marca}', '${req.body.modelo}', '${req.body.cor}','${req.body.ano}')`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

function excluirVeiculos(req, res) {
    let query = `DELETE FROM veiculos WHERE placa = '${req.body.placa}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


function editarVeiculos(req, res) {
    let query = `UPDATE veiculos SET placa = '${req.body.placa}', marca = '${req.body.marca}', modelo = '${req.body.modelo}', cor = '${req.body.cor}',ano = '${req.body.ano}' WHERE placa = '${req.body.placa}'`;


    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarVeiculos,
    cadastrarVeiculo,
    excluirVeiculos,
    editarVeiculos
}