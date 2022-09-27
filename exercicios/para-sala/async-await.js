/**
 * palavra reservada async -> indica uma funcao assincrona
 * palavra reserva await -> indica que a pilha precisa esperar
 * palvra reservada try -> captura o erro
 * palvra catch -> que recebe o erro
 */

const { acharUsuaria, acharEndereco } = require("./promises")

// async function imprimirDados(nome, cep) {}

const imprimirDados = async (nome, cep) => { // é uma funcao assincrona
   try {
     const endereco = await acharEndereco(cep)
     const usuaria = await acharUsuaria(nome) // espera achar a usuaria
      console.log(usuaria, endereco)
   } catch (err) {
    console.log(err)
   }
  //  const usuaria = await acharUsuaria(nome) // espera achar a usuaria
  //  const endereco = await acharEndereco(cep)
  //  console.log(usuaria, endereco)
}

imprimirDados("Jani", "12345-678") // 2
imprimirDados("Bea", null) // 3
imprimirDados(null, "12345-789") // 1