/* 1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email da destinataria for vazio, retornar um erro */
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
        console.log("A mensagem esta sendo enviada....")
        setTimeout(() => {
        console.log(data)
    }, "1000")
        })

        console.clear();