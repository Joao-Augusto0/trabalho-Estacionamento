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

module.exports = {
    listarVagas
}