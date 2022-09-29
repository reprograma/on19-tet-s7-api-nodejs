/**
 * [ ] Consumir a promise  de envio de email com sucesso.

Regras de negocio:

1. Antes de enviar o email precisa imprimir no terminal uma mensagem que o email está sendo enviado

2. Ao consumir a promise é necessário imprimir o seu resultado no terminal, seguindo o exemplo abaixo( Não precisa conter a mesma formatação ex: tracos, indentação, quebra de linhas etc...)

console:
```bash
  tentando enviar email...
  Para: beatriz@email.com
  ---------------------------------------
  Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... 
  email enviado com sucesso.
```
---
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
  console.log("Tentando enviar e-mail")
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
    console.log("E-mail enviado com sucesso")
  })
  .catch((err) => {
   console.log(err)
})
}
imprimirEmail("lilia@g.com", "praticando conceitos trabalhados em sala")