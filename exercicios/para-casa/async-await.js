const { emailInfos } = require("./promise")

const mandarEmail = async (email, mensagem) => {
    try {
        const endEletronico = await emailInfos(email, mensagem)
        console.log(`Para: ${email}
        ----------------------------------------------------
        ${mensagem}`)
        console.log("email enviado com sucesso - async-await")
    } catch (err) {
        console.error(err)
        console.log("Falha ao enviar o email")
    }
}

mandarEmail("laschicaspiercing@gmail.com", "Cadastro efetuado com sucesso!")
// mandarEmail(null, "Cadastro efetuado com sucesso!") // para teste de erro.