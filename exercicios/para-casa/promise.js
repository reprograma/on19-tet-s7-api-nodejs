const dadosEmail = (email,mensagem) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email) {
                return reject("Falha ao enviar email")
            }
            return resolve({
                email,
                assunto:"Todas em Tech - {Reprograma}",
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
         Assunto: ${mail.assunto}
         ----------------------------------------------------------------------------
         ${mail.mensagem}`)
         setTimeout(()=>{
            console.log("\nEmail enviado com sucesso");
        },1000)
         
     }).catch((err) =>{
     console.error(err)
     })
}
enviarEmail("shiteles@email.com","Parabéns! Você foi escolhida para fazer parte da próxima turma de back-end!")
//enviarEmail(null,"Parabéns! Você foi escolhida para fazer parte da próxima turma de back-end!") //Para testar erro 