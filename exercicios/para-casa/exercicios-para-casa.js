console.log("\nTentando enviar e-mail...")

//Construção

const acharEmail = (email) => { //constante para achar o email procurado
    return new Promise((acept, reject) => { //criando uma promisse que dirá se o e-mail foi acept ou rejeict
        setTimeout(() => { // Tempo para a resposta
            if (!email) {
                return reject("\nO e-mail não pode ser vazio.\n\nFalha ao enviar.\n") // MENSAGEM REJECT PARA EMAIL NÃO PREENCHIDO
            }
            return acept({ // RETORNANDO EMAIL ACEPT
                email
            })
        },3000) // TEMPO DE RESPOSTA DE 3 SEGUNDOS
    })
}

                                        // CONSUMINDO O EMAIL

const imprimirEmail = (email) => { // FUNÇÃO DE IMPRESSÃO DO EMAIL
    acharEmail(email).then((usuaria) => { // PARAMETRO ACHAR EMAIL FEITO E DEPOIS O USUARIA 
        console.log(`
            Para: ${usuaria.email}
            Assunto: Resolução de exercício
            ---------------------------------------
            Mensagem: Para conseguir realizar esse exercício será necessário combinar todos os conhecimentos adquiridos em aula... 
        `); // MENSAGEM QUE SERÁ IMPRESSA 
        setTimeout(() => { //TEMPO DE RETORNO DA MENSAGEM SUCESS 4 SEGUNDOS
            console.log("E-mail enviado com sucesso!\n")
        },4000)
        return {usuaria} // OPERAÇÃO SUCESS, RETORNA O EMAIL DA USUARIA
    }).catch((err) => { // SE HOUVER ERRO
        console.error(err) // CONSOLE DE ERRO
    })
};

// MENSAGEM SUCESS 
//imprimirEmail("annabarbosa.email@email.com") 

//MENSAGEM REJECT
imprimirEmail(null)