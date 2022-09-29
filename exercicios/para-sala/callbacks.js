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
<<<<<<< HEAD
    callback()
=======
    const cidade = "Sao Paulo"
    callback(null, {
      cidade: cidade,
      sigla: "SP"
    })
>>>>>>> cb6934c7b43dc64e1cbab0886b466e1f01a8d44e
   }, 5000)
}

acharUsuaria((err, usuaria) => {
  console.log("Callback chamado.")
  //console.log(err, usuaria)
  if (err) {
    return console.error(err)
  }

<<<<<<< HEAD
  acharEndereco(() => { 
    console.log(`
      usuaria: ${usuaria.nome}
      email: ${usuaria.email}
    `)
  })
})
=======
  acharEndereco((err, endereco) => { 
    console.log(`
      usuaria: ${usuaria.nome}
      email: ${usuaria.email}
      endereco: ${endereco.cidade} - ${endereco.sigla}
    `)
  })
})
>>>>>>> cb6934c7b43dc64e1cbab0886b466e1f01a8d44e
