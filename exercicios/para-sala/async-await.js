/**
 * palavra reservada async -> indica uma funcao assincrona
<<<<<<< HEAD

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
      //console.log(usuaria, endereco)
      //return { endereco, usuaria }
      return {
        endereco: endereco,
        usuaria: usuaria
      }
   } catch (err) {
    console.log(err)
   }
  //  const usuaria = await acharUsuaria(nome) // espera achar a usuaria
  //  const endereco = await acharEndereco(cep)
  //  console.log(usuaria, endereco)
}

// imprimirDados("Jani", "12345-678") // 2
// imprimirDados("Bea", null) // 3
// imprimirDados(null, "12345-789") // 1
const imprimirDadosComPromiseAll = async () => {
  const values = await Promise // retorna uma array com todos os resultados, CASO OCORRA SUCESSO EM TODAS AS PROMISES
  .all([ // o método .all() ele recebe como parametro uma array de promise
    acharUsuaria("Bea"), // ele só traz os dados da usuaria
    acharEndereco("12345678"), // ele só os dados do endereco
    imprimirDados("Elvira", "123456") // como aqui foi chamado ambos e seus resultados retornados, ele traz ambos
    ])

    console.log(values)
}

imprimirDadosComPromiseAll()
>>>>>>> cb6934c7b43dc64e1cbab0886b466e1f01a8d44e
