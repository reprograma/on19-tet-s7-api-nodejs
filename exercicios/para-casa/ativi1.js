
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

//testes...

/*const email = new Promise((resolve, reject) => {
    
    const yourEmail = "lilith@666.com"

    if (yourEmail =="lilith@666.com") {
    
     resolve("Email enviado com sucesso !")
        
    } else {
        reject("erro!")
    } 
})
 
// Quando uma função assíncroda foi bem sucedida. Quando uma promessa é cumprida, seu manipulador é chamado.then()
email.then((data) =>{
    console.log(data)
})*/


//Outra forma de resolver a questão , de forma simples e direta :
/*let promise = new Promise(function(resolve, reject) {
    //const yourEmail = "lilith@666.com"
    setTimeout(() => resolve("Email  enviado com sucesso !"), 1000);
  });
  
  // resolve executa a primeira função em .then
  promise.then(
    result => console.log(result), 
    error => console.log(error) 
  );*/

