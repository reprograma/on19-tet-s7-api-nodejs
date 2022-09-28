/**
 * palavra reservada async indica uma função assincrona
 * palavra reservada await indica que a pilha precisa esperar
 * palavra mreservada try captura o erro 
 * palavra reservada catch recebe o erro 
 */

const { acharUsuaria, acharEndereco } = require("./promises")
//async function imprimirDados(nome, cep) {} casos de herança
const imprimirDados = async (nome, cep) => { // é uma função assicrona
    try {
        const usuaria = await acharUsuaria(nome) // epera achar a usuaria
        const endereco = await acharEndereco(cep)
    console.log(usuaria, endereco)
    } catch (err){
        console.log(err)
    }
    
    //const usuaria = await acharUsuaria(nome) // epera achar a usuaria
    //const endereco = await acharEndereco(cep)
//console.log(usuaria, endereco)
}

imprimirDados(null, "12345-678")