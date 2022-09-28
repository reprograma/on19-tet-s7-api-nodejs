
/*
 [ ] Consumir a promise  de envio de email com sucesso.

Regras de negocio:

1. Antes de enviar o email precisa imprimir no terminal uma mensagem que o email está
 sendo enviado

2. Ao consumir a promise é necessário imprimir o seu resultado no terminal,
 seguindo o exemplo abaixo( Não precisa conter a mesma formatação ex: tracos,
     indentação, quebra de linhas etc...)

console:
```bash
  tentando enviar email...
  Para: beatriz@email.com
  ---------------------------------------
  Para conseguir realizar esse exercicio será necessário combinar todos
   os conhecimentos adquiridos em aula... 
  email enviado com sucesso.
```
*/

const verificarEmail =(email) =>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
     if(!email){
        return reject(" Verificando email. ")
     } 
     return resolve({
        email
     })  
    },2000)
})



}
const verficarMensangem = (mensagem) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mensagem === "" || mensagem === undefined) {
          return reject("campo mensagem não pode esta vazio")
        }
        return resolve({
          mensagem
          
        })
      },1000)
    })
  
  }

  const imprimirDados = (email, mensagem) => {
    verificarEmail("greicepereira2020@gmail.com").then((destinataria) => {
        console.log("\nO email está sendo enviado...")
        verficarMensangem("Ola mundo,e assim que faz uma promises.").then((usuaria) => {
          console.log(`
          Para: ${destinataria.email}
          -----------------------------------------
          Mensagem: ${usuaria.mensagem}
          `)
          console.log("Email enviado com sucesso.")
        })
        
      },3000)
      .catch((err) => {
        console.error(err);
      });
  }
  imprimirDados()