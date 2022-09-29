console.log(" Buscando email ...")
const EnviandoEmail = (email) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!email) {
                return reject(" O email está vazio por isso não pode ser enviado")
               }
               return resolve({
              
                mail:  ("email@emai.com")
                } )

               
        }, 1000)
    })
    
}

const Assunto = (assunto) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(!assunto) {
                return reject ( "O assunto não pode ser enviado, o mesmo se encotra vazio")
            }
            return resolve({
                mensagem :(" Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... ")})

        }, 3000)
        
    })
  
}

const impEmail= (email, assunto) =>{
    EnviandoEmail(email).then ((retorno) => {
    
    return encontrarAssunto (assunto).then((resultadoAssunto)=>{
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
impEmail("beckssrafa02@gmail.com", "...")
//imprimirEmail()