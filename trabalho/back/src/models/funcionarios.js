const toReadAll = () => {
    return "SELECT * FROM funcionarios";
}

const toCreate = (model) => {
    return `INSERT INTO funcionarios VALUES (${req.body.id_func},'${req.body.nome}','${req.body.cargo}', '${req.body.email}', '${req.body.senha}')`;
}

const toDelete = (model) => {
    return `DELETE FROM funcionarios WHERE id_func = '${req.body.id_func}'`;
}

const toUpdate = (model) => {
    return `UPDATE funcionarios SET id_func = ${req.body.id_func}, nome = '${req.body.nome}',cargo = '${req.body.cargo}', email = '${req.body.email}', senha = '${req.body.senha}' WHERE id_func = '${req.body.id_func}'`;
}


module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}