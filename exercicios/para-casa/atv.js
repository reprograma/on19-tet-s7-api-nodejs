const enviarEmail = (email) =>{
    return new Promise((resolve, reject) => {
        console.log("Tentando enviar o e-mail...")

        setTimeout(() => {
            if (!email) {
                return reject("Msg sem destinatária, favor inserir o e-mail")
            }   return resolve (
            {
                email,
                msg: "Olá, tenha um ótimo dia!" 
            }
            )

        }, 3000) 
    })
}


enviarEmail("lari@gmail").then((destinataria) => {

    console.log(`
    Para: ${destinataria.email}
    ---------------------
    Mensagem: ${destinataria.msg}
    `)
    console.log("E-mail enviado com sucesso!")
    })
    .catch((err) => {
    console.error(err)
})

//Async / Await & Try / Catch

const exibirDados = async (email) => {
    try {
    const emailFinal = await enviarEmail(email)
    console.log("\n" + emailFinal)
} catch (err) {
    console.log ("\n"
    + ">>>Exemplo Try/Catch: " + "\n" + err)
}}

exibirDados(null)
