


const pegarUsuaria = (callback) => {
  //callback é uma função passada como parâmetro para outra função
    setTimeout(() => {
      //usamos setTimeout na nossa aula para simular uma requisição ao banco de dados
      return callback(null, {
        //passamos null como primeiro parametro para dizer que o banco não retornou erro
        nome: "Lucilania",
        email: "luci@reprograma.com",
        id: 981273981273
      }) // o objeto que contém id, nome e email é o segundo parâmetro e representa o sucesso, ou seja, os dados que queremos do banco de dados
    }, 1000)
  }
  
  const pegarEndereco = (id, callback) => {
      setTimeout(() => {
          return callback(null, {
            rua: "rua marielle franco",
            cidade: "recife",
          })
      }, 2500)
  }

  pegarUsuaria(resolverUsuaria = (error, usuaria) => {
    //resolverUsuaria é a função callback que estamos passando para pegarUsuaria, ela recebe erro e usuaria(que são os dados que solicitamos, podemos nomear como quisermos) como parametros
    if(error) {
        return console.error("Retornou erro para usuária", error);
    } //se houver erro teremos esse retorno no console, como estamos usando null no nosso exemplo não teremos erro
    pegarEndereco( //como não houve erro, vamos chamar a função pegarEndereco pra buscar o endereco da usuaria
      usuaria.id, //usamos o usuaria.id que retornou da requisição anterior como parametro 
      resolverEndereco = (error, endereco) => { 
        //resolverEndereco é a callback passada para resolver a pegarEndereco
        if(error) {
            return console.error("Retornou erro para endereco ", error);
        }
        console.log(`
        Usuária: ${usuaria.nome}
        E-mail: ${usuaria.email}
        Endereco: ${endereco.rua}, ${endereco.numero}
        `) //aqui obtivemos todos os nossos dados
    })
  })
  
//Conclusão: Usando várias callbacks nós conseguimos resolver a sicronicidade, porém criamos uma estrutura complicada com muitas funções aninhada, o que dificulta tratar erros, manipular informações;
  


//O CONSOLE NÃO FUNCIONOU POR TER CONCATENAÇÃO COM STRING, SEGUE UMA FORMA POSSÍVEL:

// function resolver(erro, usuaria) {
//   return console.log('nome da usuária: ', usuaria)
// }
// pegarUsuaria(resolver)
  

// exemplo

// function elogiar(nome) {
//     console.log(nome +", você é linda!")
// }

// function parabenizar(nome) {
//     console.log(nome +", parabéns pelo seu dia princesa!")
// }
  
// function cumprimentar(callback) {
//     let nome = 'Liniker'
//     return callback(nome)
// }

// cumprimentar(elogiar)
// cumprimentar(parabenizar)

// cumprimentar((nome) => console.log(nome + ', você é feia!'))

// cumprimentar(function xingar(nome) {
//     console.log(nome + ', você é feia!')
// })
