/*
A palavra reservada async - indica uma função assíncrona
vem acompanhada de 
A palavra reservada await - indica que a pilha precisa esperar
A palavra reservada try - captura o erro
A palavra reservada catch - recebe o erro
*/

const { acharUsuaria, acharEndereco } = require("./promises");

//async function imprimirDados(nome, cep) {}

const imprimirDados = async (nome, cep) => { // é uma funçao assíncrona
    try {
        const usuaria = await acharUsuaria(nome) // espera achar a usuária
        const endereco = await acharEndereco(cep)
        console.log(usuaria, endereco)
    } catch (err) {
        console.log(err);
    }
    /*const usuaria = await acharUsuaria(nome) // espera achar a usuária
    const endereco = await acharEndereco(cep)
    console.log(usuaria, endereco);*/
}



imprimirDados(null/*"Elis"*/, 12000000)
