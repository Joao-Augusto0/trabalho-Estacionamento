const toReadAll = () => {
    return "SELECT * FROM clientes";
}

const toCreate = (model) => {
    return `INSERT INTO clientes VALUES ('${req.body.cpf}', '${req.body.nome}', '${req.body.telefone}', '${req.body.endereco}')`;
}

const toDelete = (model) => {
    return `DELETE FROM clientes WHERE cpf = '${req.body.cpf}'`;
}

const toUpdate = (model) => {
    return `UPDATE clientes SET cpf = '${req.body.cpf}', nome = '${req.body.nome}', telefone = '${req.body.telefone}', endereco = '${req.body.endereco}' WHERE cpf = '${req.body.cpf}'`;
}


module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}