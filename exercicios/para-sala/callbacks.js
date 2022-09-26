
/*
O callback é uma função
(err, data) => {}
(err, usuaria) => {}
(err, musica) => {}
*/

console.clear();

//Abaixo, iremos simular uma função para achar uma usuária
const acharUsuaria = (callback) => { //recebemos um callback 
    //recebemos uma callback como primeiro parametro
    console.log("Carregando usuária...")
    setTimeout(function() {
        console.log("Usuária carregada.");//Simulando uma resposta assincrona 
        callback(null, { //null refere-se ao err e o {nome, email, id} é a usuária
            nome: "Bianca",
            email: "biancatrindade.mkt@gmail.com",
            id: "biatrindade"
        })
    }, 1000)
}

const acharEndereco = function(callback){
    console.log("Carregando o endereço...")
    setTimeout(() => {
        console.log("Endereço carregado.")
    callback(null, {
        cidade: "Amsterdam",
        pais: "The Netherlands"
    })
    }, 5000)
}

acharUsuaria((err, usuaria) => {
    console.log("Callback chamado.");
    //console.log(err, usuaria)
    if(err) {
        return console.error(err)
    }
    acharEndereco((err, endereco) => {
    
    console.log(`
    usuaria: ${usuaria.nome},
    email: ${usuaria.email},
    endereco: ${endereco.cidade} - ${endereco.pais}
    `)

    })

=======
/**
 * entao o callback é uma função
 * (err, data) => {}
 * (err, usuaria) => {}
 * (err, musica) => {}
 */
// simulamos uma funcao de achar uma usuaria
const acharUsuaria = (callback) => { // a gente recebe um callback
  // recebemos uma callback como primeiro parametro
  //console.log("O callback foi chamado")
  console.log("Carregando usuaria...")
  setTimeout(function() { // simula uma resposta assincrona
      console.log("Usuaria carregada.")
      callback(null, {
        nome: "Beatriz",
        email: "bea@email.com",
        id: 1234
      })
  }, 1000)
}

const acharEndereco = function(callback) {
   console.log("carregando o endereco...")
   setTimeout(() => {
    console.log("endereco carregado.")
    const cidade = "Sao Paulo"
    callback(null, {
      cidade: cidade,
      sigla: "SP"
    })
   }, 5000)
}

acharUsuaria((err, usuaria) => {
  console.log("Callback chamado.")
  //console.log(err, usuaria)
  if (err) {
    return console.error(err)
  }

  acharEndereco((err, endereco) => { 
    console.log(`
      usuaria: ${usuaria.nome}
      email: ${usuaria.email}
      endereco: ${endereco.cidade} - ${endereco.sigla}
    `)
  })
})