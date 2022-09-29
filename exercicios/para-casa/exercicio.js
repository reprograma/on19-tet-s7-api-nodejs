/*
1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.
 Regras de negocio:
  a. Se o email da destinataria for vazio, retornar um erro
*/

const acharOEmail = (email, mensagem) =>{
  return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      if (!email){
        return reject ("Falha ao enviar o email. Por favor, insira o email da destinataria")
      }
      return resolve (({
        para: email, 
      }).para)
    }, 3000)
  }).then (mensagem = texto =>
    console.log(texto))
}