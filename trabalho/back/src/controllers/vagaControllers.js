const Item = require('../models/vagas')
const con = require('../models/estacionamentoDAO')

const listarVagas = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const editarVagas = (req, res) => {
    con.query(Item.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    })
}


module.exports = {
    listarVagas,
    editarVagas
}