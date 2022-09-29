/**
 * palavra reservada async -> indica uma ficção assicrona
 * palavra reserva await -> indica que a pilha prescisa esperar
 * palavra reservada try -> captura o erro
 * palavra ctch -> que recebe o erro
 */

const { acharUsuaria, acharEndereco} = require("./promises-Lydianne")

//async function imprimirDados(nome, cep) {}

const imprimirDados = async (nome, cep) => {// É uma fução assincrona
    try{
        const usuaria = await acharUsuaria(nome)//espera achar a usuaria
        const endereco = await acharEndereco(cep)
    console.log(usuaria, endereco)
 } catch(err){
    console.log(err)
 }
 //const usuaria = await


imprimirDados("Lydianne")