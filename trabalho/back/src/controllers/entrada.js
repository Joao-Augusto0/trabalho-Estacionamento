const mysql = require('mysql')

conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
})

function listarEntradas(req, res) {
    let query = "SELECT * FROM vw_dia";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

function cadastrarEntrada(req, res) {
    let query = `INSERT INTO entrada VALUES ('${req.body.placa}','${req.body.cpf}', '${req.body.hora_entrada}', '${req.body.hora_saida}','${req.body.valor_hora}','${req.body.vaga}')`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarEntradas,
    cadastrarEntrada,
}