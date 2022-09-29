const enviarEmail = (email, assunto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            if (!email) {
                return reject("O e-mail deverá ter destinatario.")
            } 
            if (!assunto) {
                return reject("O e-mail deverá ter assunto.")
            }
            return resolve("Para: " + ({
                para: email,
            }).para)
        }, 2000)
    }).then(assunto = mensagem => console.log(mensagem));
}

const emailEnviado = (email, assunto) => {
    console.log("Tentando enviar email...\n");
    enviarEmail(email, assunto).then(() => {
        console.log(`Assunto: ${assunto}\n`);
        
        console.log("Email enviado.");
    }).catch((err) => {
        console.error(err);
    }).catch
}

emailEnviado("djeisly@email.com", "Atividade de Promises");