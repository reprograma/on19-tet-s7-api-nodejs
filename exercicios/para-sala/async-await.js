
/*
palavras reservadas:
async - indica uma função assíncrona
await - indica que a pilha precisa esperar 
try - captura o erro 
catch - recebe o erro 
*/

const { acharUsuaria, acharEndereco } = require("./promises")

// async function imprimirDados(nome, cep) {} -- exemplo com function

const imprimirDados = async (nome, cep) => {  // é uma função assincrona
    const usuaria = await acharUsuaria(nome) // esperar a usuaria
    const endereco = await acharEndereco(cep)
    console.log(usuaria, endereco)
}

imprimirDados("Pâm", "77777-000")