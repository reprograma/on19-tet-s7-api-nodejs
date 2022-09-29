/**3. [ ] Consumir a promise de envio de email com erro.

console:
```bash
  tentando enviar email...

  falha ao enviar o email.
```
 * 
 * 
 */



const digiteDestinatario = (email) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
     if (!email) {
      return reject("Digite um destinatário")
      }
      return resolve({
       email: "lilia@g.com",
       
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

   

  
const imprimirEmail = (email,mensagem) => {
  console.log("\nTentando enviar e-mail")
  console.log("\nNão foi possível enviar o e-mail")
  digiteDestinatario(email).then((user) => {
    console.log(`
  Remetente: ${user.email}
  Assunto: Exercicios Semana 7
    ------------------------------
    `)
  return digitarMensagem(mensagem).then((msg) =>{
    console.log(`${msg.mensagem}`)
  })
  })
  .then(dados =>{
    console.log(dados)
    

  .catch((err) => {
   console.log(err)
   
  });
})
}
imprimirEmail()