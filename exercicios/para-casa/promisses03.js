/* 
3. [ ] Consumir a promise de envio de email com erro.

console:
```bash
  tentando enviar email...

  falha ao enviar o email.
```
 */
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
        console.log("Tentando enviar email")
        console.log(email)
        console.log("FALHA FATAL.")
        setTimeout(() => {
        console.log(data)
    }, "1000")
        })

        console.clear();