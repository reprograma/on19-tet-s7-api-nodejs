/**
 * palavra reservada async -> indica uma funcao assincrona
 * palavra reservada await -> indica q a pilha precisa esperar
 * try ->captura o erro
 * recebe o erro do try 
 */

const { acharUsuaria, acharEndereco} = require("./promises");

const imprimirDados = async(nome, cep) => {

    try {
        const usuaria = await acharUsuaria(nome)
        const endereco = await acharEndereco(cep)
        console.log(usuaria, endereco);
    } catch(err) {
        console.error(err)
    }
    
}

imprimirDados("Lydianne", "1111-11")