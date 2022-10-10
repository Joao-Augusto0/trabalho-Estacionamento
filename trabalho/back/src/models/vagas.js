const toReadAll = () => {
    return "SELECT * FROM vaga"
}

const toUpdate = (model) => {
    return `UPDATE vaga SET id_vaga = '${req.body.id_vaga}', ocupada = '${req.body.ocupada}'`;
}


module.exports = {
    toReadAll,
    toUpdate
}