

/* 
[ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email for vazio a retornar um erro
*/

const verificarEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email) {
        return reject(" O email esta incorreto ")
      }
      return resolve({
        email
        
      })
    }, 1000)
  }
  )

}

const verficarMensangem = (mensagem) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mensagem === "" || mensagem === undefined) {
        return reject("campo mensagem não pode esta vazio")
      }
      return resolve({
        mensagem
      })
    },1000)
  })

}

const imprimirDados = (email, mensagem) => {
  verificarEmail("").then((destinataria) => {
      console.log("email verificado")
      verficarMensangem(" exercico de promises").then((usuaria) => {
        console.log(`
        email:${destinataria.email}
        mensagem:${usuaria.mensagem}
        `)

      })
    },3000)
    .catch((err) => {
      console.error(err);
    });
}
imprimirDados()
