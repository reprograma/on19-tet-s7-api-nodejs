const dadosEmail = (email,mensagem) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email) {
                return reject("Falha ao enviar email")
            }
            return resolve({
                email,
                mensagem,
            })
        }, 1000)
    })
}
module.exports={
    dadosEmail
}


const enviarEmail = (email,mensagem)=>{
    console.log("Tentando enviar email...");
    dadosEmail(email,mensagem).then((mail)=>{   
         console.log(`
         Para: ${mail.email}
         ----------------------------------------------------------------------------
         ${mail.mensagem}
         \n Email enviado com sucesso`)
    
     }).catch((err) =>{
     console.error(err)
     })
}
enviarEmail("mariathays@mail.com"," Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... ")
//enviarEmail(null," Para conseguir realizar esse exercicio será necessário combinar todos os conhecimentos adquiridos em aula... ") //Para testar erro