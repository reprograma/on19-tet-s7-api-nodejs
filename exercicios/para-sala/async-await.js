

const {acharUsuaria, acharEndereco} = require("./promises");

const printData = async (nome, cep) => {
    try {
     const usuaria = await acharUsuaria(nome);
     const endereco = await acharEndereco(cep);
     console.log(usuaria, endereco);
    } catch (err) {
        console.log(err);
    }
}

printData("Laura", 87020000);