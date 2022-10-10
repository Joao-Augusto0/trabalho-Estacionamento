const express = require('express')
const router = express.Router()

const clientes = require('../controllers/clientesControllers')

router.get("/estacionamento/clientes", clientes.listarCLientes)
router.post("/estacionamento/clientes", clientes.cadastrarClientes)
router.put("/estacionamento/clientes", clientes.editarClientes)
router.delete("/estacionamento/clientes", clientes.excluirClientes)

const veiculos = require('../controllers/veiculosControllers')

router.get("/estacionamento/veiculos", veiculos.listarVeiculos)
router.post("/estacionamento/veiculos", veiculos.cadastrarVeiculos)
router.delete("/estacionamento/veiculos", veiculos.excluirVeiculos)
router.delete("/estacionamento/veiculos", veiculos.excluirVeiculos)

const entrada = require('../controllers/entradaControllers')

router.get("/estacionamento/entradas", entrada.listarEntradas)
router.post("/estacionamento/entradas", entrada.cadastrarEntradas)
router.delete("/estacionamento/entradas", entrada.excluirEntradas)
router.put("/estacionamento/entradas", entrada.editarEntradas)

const vagas = require('../controllers/vagaControllers')

router.get("/estacionamento/vagas", vagas.listarVagas)
router.put("/estacionamento/vagas", vagas.editarVagas)

const funcionario = require('../controllers/funcionarioControllers')

router.get("/estacionamento/funcionarios", funcionario.listarFuncionarios)
router.post("/estacionamento/funcionarios", funcionario.cadastrarFuncionarios)
router.put("/estacionamento/funcionarios", funcionario.editarFuncionarios)
router.delete("/estacionamento/funcionarios", funcionario.excluirFuncionarios)

module.exports = router