//Resolução do exercício com manipulação de dados/objetos

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
    .then((dados) => {
        return {
            dados
        }
        
    })
    .then(informacao => {
        const {dados} = informacao
        console.log(`Enviando e-mail...
        Destino: ${dados.email}
        Mensagem: ${dados.mensagem}`);
    
    })
    .catch((err) => {
        console.error(err)
})
}

enviarEmail("laura@email.com", "")