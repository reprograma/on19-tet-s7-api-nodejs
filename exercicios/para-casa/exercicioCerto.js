
console.log(" Buscando email ...")
const enviarEmail = (email) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!email) {
                return reject(" O email não pode ser enviado pois está vazio")
               }
               return resolve({
              
                mail:  ("email@emai.com")
                } )

               
        }, 1000)
    })
    
}

const acharAssunto = (assunto) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!assunto) {
                return reject ( "O assunto está vazio, não pode ser enviado")
            }
            return resolve({
                mensagem :(" Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... ")})

        }, 3000)
        
    })
  
}

//hora de consumir 
/*enviarEmail("").then((email) => {
    console.log(`
    email enviado para : ${email.mail}
    ` )
}).catch((err) => {
    console.error(err)
})
acharAssunto("").then((assunto) => {
    console.log(`
    Assunto: ${assunto.mensagem}
   Email enviado ` )
}).catch((err) => {
    console.error(err)
})*/
const imprimirEmail= (email, assunto) =>{
    enviarEmail(email).then ((retorno) => {
    
    return acharAssunto(assunto).then((resultadoAssunto)=>{
        return {
           retorno,resultadoAssunto
        }
     

     })
    
    }) .then( ({retorno,resultadoAssunto}) => {
        console.log (`
        email: ${retorno.mail }
        assunto: ${resultadoAssunto.mensagem}
        `);
        console.log("Email enviado")
        

    }).catch((err) => {
        console.error(err)
      
})
}
imprimirEmail("dlsfarias@hotmail.com", "...")
imprimirEmail("","")
