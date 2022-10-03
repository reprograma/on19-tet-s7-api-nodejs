// Criar uma promise que simule um envio de email ela precisa ter como parametro: 
// o email da destinataria
//mensagem que será enviada.

const enviarEmail =(email,mensagem) =>{
    console.log("tentando enviar email...",email)
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
       if(!email){
          return reject(" email não pode ser enviado, por falta de destinatario.")
       } 
       if(mensagemInvalida(mensagem) ){
        return reject ("mensagem não pode ser vazia")
       }
       console.log("email enviado com sucesso")
       return resolve({
          email, mensagem
       })  
      },2000)
  })
  
  }
  const mensagemInvalida = (mensagem) =>   (!mensagem || mensagem === "")
          
   
    const imprimirDados = (email, mensagem) => {
      enviarEmail(email,mensagem)  
        .then((envelope)=>{
          console.log(`
            Para: ${envelope.email}
            -----------------------------------------
            Mensagem: ${envelope.mensagem}
            `)
            console.log("Email enviado com sucesso.")
          
        }).catch((err) => {
          console.error(err);
        });
    }
    imprimirDados()
    imprimirDados("greicepereira2020@gmail.com","ola")
  