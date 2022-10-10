const Item = require('../models/funcionarios')
const con = require('../models/estacionamentoDAO')

const listarFuncionarios = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const cadastrarFuncionarios = (req, res) => {
    con.query(Item.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const excluirFuncionarios = (req, res) => {
    con.query(Item.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


const editarFuncionarios = (req, res) => {
    con.query(Item.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}


module.exports = {
    cadastrarFuncionarios,
    listarFuncionarios,
    editarFuncionarios,
    excluirFuncionarios
}