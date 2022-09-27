/*3. [ ] Consumir a promise de envio de email com erro.

console:
```bash
  tentando enviar email...

  falha ao enviar o email.
```*/

function email2(yourEmail, success, failure) {
  setTimeout(() => {
    console.log(`Enviando email${yourEmail} ...`);
    !yourEmail ? failure(yourEmail) : success(yourEmail);
  }, 1000);
}

email2(
  '',
  (yourEmail) => console.log(`\nProcessando email ${yourEmail}`),
  
  (yourEmail) => console.log(`\nFalha ao enviar email!`)
);

//OUTRAS FORMAS DE RESOLVER :
/*let promise = new Promise(function(resolve, reject) {
  setTimeout(() => 

  reject(new Error("Falha ao enviar email")), 1000);
});

promise.then(
  result => console.log(result), 
  error => console.log(error) 
);*/

/*Promise.reject(new Error('falha na execução'))
  .catch(err => console.log(err.message))*/ 
