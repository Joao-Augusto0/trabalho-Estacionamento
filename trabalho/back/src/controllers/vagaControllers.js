const mysql = require('mysql')

conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
})

function listarVagas(req, res) {
    let query = "SELECT * FROM vaga";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

function editarVagas(req, res) {
    let query = `UPDATE vaga SET id_vaga = '${req.body.id_vaga}', ocupada = '${req.body.ocupada}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarVagas,
    editarVagas
}