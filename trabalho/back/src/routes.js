const express = require('express')
const router = express.Router()

const clientes = require('./controllers/clientes')

router.get("/clientes", clientes.listarCLientes)
router.post("/clientes", clientes.cadastrarClientes)
router.put("/clientes", clientes.editarClientes)
router.delete("/clientes", clientes.excluirClientes)

const veiculos = require('./controllers/veiculos')

router.get("/veiculos", veiculos.listarVeiculos)
router.post("/veiculos", veiculos.cadastrarVeiculo)
router.put("/veiculos", veiculos.editarVeiculos)
router.delete("/veiculos", veiculos.excluirVeiculos)

const entrada = require('./controllers/entrada')
router.get("/entradas", entrada.listarEntradas)
router.post("/entradas", entrada.cadastrarEntrada)

const vagas = require('./controllers/vaga')
router.get("/vagas", vagas.listarVagas)
router.put("/vagas", vagas.editarVagas)

module.exports = router