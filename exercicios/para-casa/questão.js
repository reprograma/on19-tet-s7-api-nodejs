/*1. [ ] Criar uma promise que simule um envio de email ela precisa ter como parametro: 
  - o email da destinataria
  - mensagem que será enviada.

 Regras de negocio:
  a. Se o email for vazio a retornar um erro*/


//construindo

const acharEmail = (email) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (!email) {
         return reject("O email nao pode ser vazio")
       }
       return resolve({
         email,
        });
     }, 1000); //tempo definido que equivale a 1 seg
    });
 };

  // cosumir
  const imprimirEmail = (email) => { 
    acharEmail(email)
    .then((usuaria) => {  
      
        console.log(`
            Para: ${usuaria.email}
            Assunto: Resolver o exercício
            

            Mensagem: Para resolver o exercício, coloque em prática o que foi passado na aula, caso precise, basta rever o  material da aula\n`) // a mensagem a ser impressa
        setTimeout(() => { 
            console.log("E-mail enviado com sucesso!\n")
        },2000)
        return {usuaria} 
    }).catch((err) => { 
        console.error(err)
    })
};


imprimirEmail("dribacos@gmail.com") 

