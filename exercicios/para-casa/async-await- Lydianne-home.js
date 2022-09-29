/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email da destinataria for vazio, retornar um erro*/

  const montagemEmail = (email, mensagem) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email) {
          return reject("ERRO!! Este email não pode estar vazio")
        }
        return resolve({
          nome: "Lydianne",
          email,
          mensagem,
        })
      }, 1000) // definindo o tempo
    })
  }

 /* 2. [ ] Consumir a promise  de envio de email com sucesso.

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

---*/

const enviarEmail = (email, mensagem) => {
    console.log("Tentando enviar este E-mail, por favor aguarde.")
    montagemEmail(email, mensagem)
      .then((dados) => {
        console.log(`
        destinatário: ${dados.email}
        --------------------------------------------------
        mensagem: ${dados.mensagem}`)

        setTimeout(() => {
          console.log("\nSeu e-mail foi enviado com sucesso!!")
        }, 1000);
      })
      .catch((err) => {
        console.error(err)
      });
  };


 enviarEmail("lydianne.correa2@gmail.com", "Este e-mail esta sendo enviado.") // testes de caso
 //Caso queira mensagem de erro, use o imprimirEmail abaixo:
//imprimirEmail(null)

/*3. [ ] Consumir a promise de envio de email com erro.

console:
```bash
  tentando enviar email...

  falha ao enviar o email.*/

  module.exports = {
    emailInfos
}