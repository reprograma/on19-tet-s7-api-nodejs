/**
 * então o callback é uma função
 * (err, data) => {}
 * (err, usuaria) => {}
 * (err, musica) => {}
 */
// Simulamos uma função de achar uma usuaria

const acharUsuaria = (callback) => {
//recebemos uma callback como primero parametro
//console.log("O callback foi chamado")
console.log("Carregando usuaria...")
setTimeout(function() {
    console.log("Usuaria carregada")
    //callback("Lydianne")  vem o nome 
    callback(null, {//null refere-se ao err e o {nome,email,id} é a usuaria
        nome: "Lydianne",
        email:"lydianne.correa2@gmail.com",
        id: "lydiannecorrea"
    })
    }, 1000)
}

const acharEndereco = function (callback) {
    console.log("Carregando o endereço...")
    setTimeout(() => {
        console.log("Endereço carregado.")
        callback(null, {
            cidade:"Recife",
            sigla: "PE"
        })
    }, 5000)
}

acharUsuaria((err, usuaria) => {
    console.log("Callback chamado.");
    //console.log(err, usuaria)
    if (err) {
        return console.error(err)
    }
    acharEndereco(() => {

    })

    acharEndereco((err, endereco) => { 
        console.log(`
          usuaria: ${usuaria.nome}
          email: ${usuaria.email}
          endereco: ${endereco.cidade} - ${endereco.sigla}
        `)
      })
    })
//null (retirado devido ao If)
