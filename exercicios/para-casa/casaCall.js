
/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
- o email da destinataria
- mensagem que será enviada.

Regras de negocio:
a. Se o email for vazio a retornar um erro

---
*/
const acharEmail = (callback) => { 
  console.log("Carregando email...")
  setTimeout(function() { 
      console.log("Usuaria carregada.")
      callback(null, {
      
        email: "bea@email.com",
       
      })
  }, 1000)
  }
  
  const enviarEmail = function(callback) {
   console.log("carregando a mensagem...")
   setTimeout(() => {
    console.log("mensagem carregada.")
    callback(null,{
      mensagem:"Tarefa realizada com sucesso",
     
    })
   }, 5000)
  }
  
  acharEmail((err, usuaria) => {
  console.log("Callback chamado.")
  if (err) {
    return console.error(err)
  }
  
  enviarEmail((err,endereco) => { 
    console.log(`
      
      email: ${usuaria.email}
      mensagem: ${endereco.mensagem}
    `)
  })
  })
  
  