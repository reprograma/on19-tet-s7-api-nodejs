
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
    try {
        const endereco = await acharEndereco(cep) 
        const usuaria = await acharUsuaria(nome) // esperar achar a usuaria
    //console.log(usuaria, endereco)   
        return { endereco, usuaria }
    } catch (err) {
        console.log(err)
    }
    
} 


//imprimirDados("Pâm", "77777-000")

const imprimirDadosComPromiseAll = async () => {
    const values = await Promise // retorna um array com todos os resultados, CASO OCORRA SUCESSO EM TODAS AS PROMISES
    .all ([ // o método .all() recebe como parâmetro uma array de promise
    acharUsuaria("Pâm"), // só traz os dados da usuária
    acharEndereco("77777-000"), // só traz os dados do endereço
    imprimirDados("babete", "77777-00")]) // como aqui foi chamado ambos e seus resultados retornados, ele traz ambos

    console.log(values)
}

imprimirDadosComPromiseAll()