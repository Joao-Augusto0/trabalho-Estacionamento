const clientes = require('../models/clientes')
const con = require('../models/estacionamentoDAO')

const listarCLientes = (req, res) => {
    con.query(clientes.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    })
}

const cadastrarClientes = (req, res) => {
    con.query(clientes.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const excluirClientes = (req, res) => {
    con.query(clientes.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


const editarClientes = (req, res) => {
    con.query(clientes.toUpdate(req.body), (err, result) => {
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
    cadastrarClientes,
    listarCLientes,
    editarClientes,
    excluirClientes
}