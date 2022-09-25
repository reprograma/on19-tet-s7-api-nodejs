// cria a Promise que simula um envio de email
const enviarEmail = (email, mensagem) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email) {
                return reject("Falha ao enviar o email. O endereço de email da destinária precisa ser informado")
            }
            return resolve("Para: " + ({
                para: email,
            }).para)
        }, 2000);
    }).then(mensagem = texto => console.log(texto));
}


// consome a promise de envio de email com sucesso
const emailEnviado = (email, mensagem) => {
    console.log("Tentando enviar email...");
    enviarEmail(email, mensagem).then(() => {
        console.log(`
        Assunto: Exercício de casa "simulação de envio de envio de email"
        _________________________________________________
        
        ${mensagem}\n`);
        console.log("Email enviado com sucesso");
    }).catch((err) => {
        console.error(err);
    })
}

emailEnviado("elis@email.com", "Consolidação dos conhecimentos em Promise");
//emailEnviado("elis@email.com", null);
//emailEnviado("elis@email.com");

// consome a promise de envio de email com erro
//emailEnviado(null, "EnderecoEmail");

