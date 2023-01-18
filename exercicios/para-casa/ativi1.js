
/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
- o email da destinataria
- mensagem que será enviada.

Regras de negocio:
a. Se o email da destinataria for vazio, retornar um erro*/

let email = new Promise(function(resolve, reject) {
    
    let yourEmail = "usuarioHackeado@gmail.com" ;
    setTimeout(() => console.log(`\nEnviando  um email para : ${yourEmail}`),1000)
    if (yourEmail)
        resolve(true);
    else
        reject(false);
});
email.then(function() {
  
   setTimeout(() =>console.log('\n"Quero 10 mil ou todos os seus dados serão vazados..."'), 2000)
}).catch(function(){
    console.log("Error");
});




