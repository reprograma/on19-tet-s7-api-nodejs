/**
 * palavra reservada async -> indica uma funcao assincrona
 * palavra reservada await -> indica uma pilha esperar
 * palavra reservada try -> captura o erro
 * palavra reservada catch -> que recebe o erro
 * 
 */
const {acharUsuaria, acharEndereco} = require("./promises.js")

//async function imprimirDados(nome,cep) {} herança
const imprimirDados = async (nome, cep) => {
     const usuaria = await acharUsuaria(nome)
     console.log(usuaria)
}

imprimirDados("Roberta")