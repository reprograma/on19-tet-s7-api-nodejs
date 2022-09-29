
const receberMensagem = (email, mensagem) => {
    return new Promise((resolve, reject) => {
            if(!email) {
                return reject("O e-mail não pode estar vazio.")
            }
            return resolve({
                email: email,
                mensagem: mensagem
            })
        });
    }

const enviarEmail = (email, mensagem) => {
    receberMensagem(email, mensagem)
    .then(() => {
        console.log(`Enviando e-mail...
        Destino: ${email}
        Mensagem: ${mensagem}`);
    })
    .then(() => {
        setTimeout(() => {
            console.log("E-mail enviado com sucesso!");
        }, 3000);
    })
    .catch((err) => {
        console.error(err)
})
}

const erroEmail = (email, mensagem) => {
    receberMensagem(email, mensagem)
    .then(() => {
        console.log(`Enviando e-mail...
        Destino: ${email}
        Mensagem: ${mensagem}`);
    })
    .then(() => {
        setTimeout(() => {
            console.log("Falha ao enviar e-mail. Tente novamente!");
        }, 3000);
    })
    .catch((err) => {
        console.error(err)
})
}

enviarEmail("laura@email.com", "")
erroEmail("laura@email.com", "Olá")