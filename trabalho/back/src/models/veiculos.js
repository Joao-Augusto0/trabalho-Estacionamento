const toReadAll = () => {
    return "SELECT * FROM veiculos"
}

const toCreate = (model) => {
    return `INSERT INTO veiculos VALUES ('${req.body.placa}', '${req.body.marca}', '${req.body.modelo}', '${req.body.cor}','${req.body.ano}')`;
}

const toDelete = (model) => {
    return  `DELETE FROM veiculos WHERE placa = '${req.body.placa}'`;
}

const toUpdate = (model) => {
    return `UPDATE veiculos SET placa = '${req.body.placa}', marca = '${req.body.marca}', modelo = '${req.body.modelo}', cor = '${req.body.cor}',ano = '${req.body.ano}' WHERE placa = '${req.body.placa}'`;
}


module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}