// Exercício de Casa 

/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email for vazio a retornar um erro
  */

  // construcao
const enderecoEmail = (email,mensagem) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email) {
          return reject("Endereço de email não informado");
        }
        return resolve({
          email,
          Assunto: "Entrega de atividade",
          mensagem,
        });
      }, 2000);
    });
  };
  
  module.exports = {
    enderecoEmail
  }

  /*2. Ao consumir a promise é necessário imprimir o seu resultado no terminal, seguindo o exemplo */
// cosumir
const enviarEmail = (email, mensagem) => {
  console.log("tentando enviar email...")
  enderecoEmail(email)
    .then((texto) => {

      console.log(`
      Para: ${texto.email}
      Assunto: ${texto.Assunto}
      -------------------------------------------
      ${mensagem}`)
         
      setTimeout(() => {
        console.log("\nEmail enviado com sucesso");
    },1000)

 }).catch((err) =>{
 console.error(err)
 })
}
enviarEmail("liliane@email.com","Atividades entregues no GitHub")

/* 3. [ ] Consumir a promise de envio de email com erro.*/

//enviarEmail(null,"Atividades entregues no GitHub")
