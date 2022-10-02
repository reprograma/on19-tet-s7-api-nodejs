/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email da destinataria for vazio, retornar um erro
*/




const enviarEmail = (email,mensagem) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email) {
        return reject("\nFalha ao enviar email")//verificando email
      }
      if(verificaMensagem(mensagem)) {
        return reject("\nMensagem não enviada")
      }
      console.log("\nEmail enviado com sucesso!")
      return resolve({
        email, mensagem
       })
     }, 2000)
   })
 }
 const verificaMensagem = (mensagem) => (!mensagem || mensagem === "") 

 //consumindo
 const imprimirResultado = (email, mensagem) => {
  console.log("Tentando enviar e-mail...")
  enviarEmail(email, mensagem)
  .then((envelope) => {
    console.log(`
        Para: ${envelope.email}
        ________________________________________

        Mensagem: ${envelope.mensagem}
  `)
    
  }).catch((err) => {console.error(err)});

} 
imprimirResultado("bil@gmail.com", "Boas vindas!");
imprimirResultado("rob@email.com", "Olá!");
imprimirResultado(null, "Adeus");
