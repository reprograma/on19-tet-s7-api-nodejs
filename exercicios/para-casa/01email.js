/**
 *1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email for vazio a retornar um erro
 * 
 */


const digiteDestinatario = (email) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
     if (!email) {
      return reject("Digite um destinatário")
      }
      return resolve({
       email,
       
      })
     }, 1000)
    })
  
  }

  const digitarMensagem = (mensagem) => {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        if (!mensagem) {
         return reject ("O e-mail não pode ser vazio")
        }
        return resolve({
           mensagem
        
         })
       }, 3000)
      });
   };

   const imprimirDados = (email,mensagem) => {
    digiteDestinatario(email)
     .then((user) => {
      return digitarMensagem(mensagem).then(texto => {
      return {
          user,texto
      }
      
      })
      
    })
    .then(dados =>{
      console.log(dados)
      console.log("E-mail foi enviado")
      })
     .catch((err) => {
      console.log(err)
   });
  };
  
  imprimirDados("lili@g.com", "Oi! Tudo bem? ")
  