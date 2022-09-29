console.log("\nTentando enviar e-mail...")

//Construção

const acharEmail = (email) => { 
    return new Promise((acept, reject) => { 
        setTimeout(() => { 
            if (!email) {
                return reject("\nO e-mail não pode ser vazio.\n\nFalha ao enviar.\n") 
            }
            return acept({ 
                email
            })
        },3000) 
    })
}

                                        

const imprimirEmail = (email) => { 
    acharEmail(email).then((usuaria) => {  
        console.log(`
            Para: ${usuaria.email}
            Assunto: Resolução de exercício
            ---------------------------------------
            Mensagem: Para conseguir realizar esse exercício será necessário combinar todos os conhecimentos adquiridos em aula... 
        `);  
        setTimeout(() => { 
            console.log("E-mail enviado com sucesso!\n")
        },4000)
        return {usuaria} 
    }).catch((err) => { 
        console.error(err) 
    })
};

// MENSAGEM SUCESS 
//imprimirEmail("annabarbosa.email@email.com") 

//MENSAGEM REJECT
imprimirEmail(null)