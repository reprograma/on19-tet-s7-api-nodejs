/* 
palavra reservada async -> indica uma função assincrona
palavra reservada await -> indica que o código precisa esperar
palavra reservada try -> que tentar pegar o erro
palavra catch -> que captura o erro e o recebe
*/

const { acharUsuaria, acharEndereco } = require("./promises")

//async function imprirmirDados(nome, cep) {}

const imprimirDados = async (nome, cep) => { // é uma função assincrona
    const usuaria = await acharUsuaria(nome); // esperar achar a usuária
    const endereco = await acharEndereco(cep);
    console.log(usuaria, endereco)
}

imprimirDados("Bianca", "1012")