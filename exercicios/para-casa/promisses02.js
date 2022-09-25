/* 2. [ ] Consumir a promise  de envio de email com sucesso.

Regras de negocio:

1. Antes de enviar o email precisa imprimir no terminal uma mensagem que o email está sendo enviado

2. Ao consumir a promise é necessário imprimir o seu resultado no terminal, seguindo o exemplo abaixo( Não precisa conter a mesma formatação ex: tracos, indentação, quebra de linhas etc...) */
const readline = require("readline-sync");

console.log("Digite seu nome");
const nome = readline.question();
console.log("Digite seu e-mail"); // aqui poderia ser readline.questionEmail mas sai da regra de negocio.
const email = readline.question();
console.log("Digite sua mensagem");
const newmessage =  readline.question();
const myPromise = new Promise((resolve,reject) => {
        if (!email) {
          return reject("O e-mail nao pode ser vazio");
        }
        return resolve({
          nome,
          email,
          newmessage,
        });
    });
      myPromise.then((data) =>{
        console.log("Tentando enviar email para:")
        console.log(email)
        console.log("Email enviado com seucesso!!.")
        setTimeout(() => {
        console.log(data)
    }, "1000")
        })

        console.clear();