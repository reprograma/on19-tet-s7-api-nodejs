//o callback é uma função e por ser função, ela vai ter um erro (err) e uma data (data aqui é uma informação, podendo ser usuaria,musica, libros, etd.);
//e vai ter o sinal de função: => {}
//criando:

const acharUsuaria = (callback) => { //aqui a gente recebe um callback
    //recebemos uma callback como primeiro parametro
    console.log("Carregando usuaria...")
    setTimeout(function() { //dentro desse setTimeout é preciso passar uma callback, não vai ter nenhum parametro. é com esse que vai atrasar o código, que é necessario.
        console.log("Usuaria carrega.")
        callback(null, {
            nome: "Beatriz",
            email: "bea@gmail.com",
            id: 1234
        })

}, 1000)
}

const acharEndereço = function(callback) {
    console.log("Carregando o endereço...")
    setTimeout(() => {
        console.log("Endereço carregado.")
        callback(null, {
            cidade: "Campina Grande",
            Sigla: "CG"
        })
    },5000)
}

//essa função em si é o callback, é quando vc chama o que é pedido. se não tiver nada entre (), não vai chamar nada, é preciso colocar dentro dos ().
acharUsuaria((err, usuaria) => { //o err é do null lá em cima, o usuaria é o restante das informações.
    console.log("Callback chamado.")
    if(err) {
        return console.error(err)
    }

    acharEndereço ((err, endereço) => {
    console.log(`
    usuaria: ${usuaria.nome}
    email: ${usuaria.email}
    endereço: ${endereço.cidade} - ${endereço.Sigla}
    `)
})
    })