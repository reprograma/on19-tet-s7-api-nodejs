console.clear()


const envieEmail = (email) => { //criar constante onde estão os dados
  return new Promise((resolve, reject) => {//criar um retorno de uma promessa onde pode ser resolvido ou rejeitado
  setTimeout (() => { //definir a assincronisidade da promise... fora do escopo definir tempo
    if (!email){ // se o email for invalido ou diferente do determinado...
      return reject ("O email não pode ser vazio", "falha ao enviar o e-mail") // mensagem se o email for vazio
    }
      return resolve({ //retorno quando o email for valido
        email, //dados
        mensagem: "Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula..."
      })
  },3000) //quantidade de tempo de processamento
})
}
 console.log ("Tentando enviar email...")// mensagem a ser impressa primeiro

//consumir
envieEmail ("karolinearaujo852@gmail.com").then ((user) => {// passando os dados
  console.log(`
  email: ${user.email}
  ------------------------------------------------------------------------
  mensagem: ${user.mensagem}
  `)
}).catch((err) => {
  console.error(err)
})