const toReadAll = () => {
    return "SELECT * FROM vw_dia";
}

const toCreate = (model) => {
    return `INSERT INTO entrada VALUES ('${req.body.placa}','${req.body.cpf}', '${req.body.hora_entrada}', '${req.body.hora_saida}','${req.body.valor_hora}','${req.body.vaga}')`;
}

const toDelete = (model) => {
    return `DELETE FROM entrada WHERE cpf = '${req.body.cpf}'`;
}

const toUpdate = (model) => {
    return `UPDATE entrada SET placa = '${req.body.placa}', cpf = '${req.body.cpf}', hora_entrada = '${req.body.hora_entrada}', hora_saida = '${req.body.hora_saida}', valor_hora = '${req.body.valor_hora}', vaga = '${req.body.vaga}' WHERE cpf = '${req.body.cpf}'`;
}


module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}