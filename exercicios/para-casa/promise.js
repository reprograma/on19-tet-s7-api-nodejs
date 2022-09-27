// construindo promise e-mail

const emailInfos = (email,mensagem) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!email) {
                return reject("Necessário informar o email.")
            }
            return resolve({
                email,
                mensagem
            })
        }, 1000)
    })
}

// consumindo promise e-mail

const enviarEmail = (email, mensagem) => {
    console.log("tentando enviar email...")
    emailInfos(email, mensagem)
    .then(() => {
        console.log(`
        Para: ${email}
        --------------------------------------
        ${mensagem}\n`)
    })
    .catch(err => {
        console.error(err)
        console.log("Falha ao enviar o email")
    })
}

enviarEmail("laschicaspiercing@gmail.com", "Parabéns! Você ganhou um curso de body piercer") // teste caso de sucesso

// enviarEmail(null, "Parabéns! Você ganhou um curso de body piercer!") // teste de erro

module.exports = {
    emailInfos
}