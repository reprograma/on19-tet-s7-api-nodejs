console.clear()

/*
callback é uma função - por padrão:
(err, data) => {} data fica abstrato, boa prática é declarar o que é!
(err, usuaria) => {}
(err, musica) => {}
*/
// simulamos uma função de achar usuária
const acharUsuaria = (callback) => { // callback pode ter qualquer nome
    // recebemos uma callback como primeiro parâmetro
    // console.log("o callback foi chamado")
    console.log("Carregando usuária...")
    setTimeout(function() {
        console.log("Usuária carregada.")
        callback(null, {
            nome: "Pâm",
            email: "tipopamela@email.com",
            id: 1234 
        })
    }, 1000) // informa tempo
}

const acharEndereco = function(callback) {
    console.log("carregando o endereço...")
    setTimeout(() => {
        console.log("endereço carregado")
        callback(null, {
            cidade: "São Paulo",
            sigla: "SP"
        })
    }, 5000)

}

acharUsuaria((err, usuaria) => { // primeiro parâmetro
    console.log("Callback chamado")
    //console.log(err, usuaria)
    if (err) {
        return console.error(err) // se houver erro, tudo que estiver abaixo não será executado
    }

    acharEndereco((err, endereco) => {
    console.log(`
        usuaria: ${usuaria.nome}
        email: ${usuaria.email}
        endereco: ${endereco.cidade} - ${endereco.sigla} 
    `)
    })
})