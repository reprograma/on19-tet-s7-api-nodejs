/*2. [ ] Consumir a promise  de envio de email com sucesso.

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
```*/

function email2(yourEmail, success, failure) {
  const Email = "lilith@666.com"
  setTimeout(() => {
    console.log(`\nLúcifer está enviando um email${yourEmail} ...`);
    console.log(`\nPara : ${Email}`)

    !yourEmail ? failure(yourEmail) : success(yourEmail);
  }, 1000);
}

email2(
  '',
  (yourEmail) => console.log(`Processando email ${yourEmail}`),
  
  (yourEmail) => console.log(`\nEmail enviado com sucesso!`)
);



