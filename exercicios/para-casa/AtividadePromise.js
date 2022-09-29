//primeiro é preciso criar uma consta:
const emailParaEnvio = (email) => { 
    return new Promise((resolve, reject) => { //a promisse vai mostrar o que será feito caso o e-mail seja aceito ou não.
        setTimeout(() => { 
            if (!email) {
                return reject("\nO e-mail não pode ser vazio.\n\nFalha ao enviar.\n") //essa mensagem aparece se for rejeitado.
            }
            return resolve({ //se for aceito o e-mail aparece.
                email
            })
        },2000) //esse é o tempo. 2000 equivale a 2segundo.
    })
}

//agora vai gerar a função para imprimir no terminal:

const imprimirEmail = (email) => { 
    console.log("\nTentando enviar e-mail...")
    emailParaEnvio(email).then((usuaria) => { 
        console.log(`
            Para: ${usuaria.email}
            Assunto: Resposta da atividade para casa
            ---------------------------------------
            Texto: Para conseguir realizar esse exercício será necessário combinar todos os conhecimentos adquiridos em aula... 
        `); 
        setTimeout(() => { 
            console.log("E-mail enviado com sucesso!\n")
        },3000)
        return {usuaria} 
    }).catch((err) => { 
        console.error(err)
    })
};

imprimirEmail("mikaelacs@hotmail.com") //para aparecer a mensagem de erro é preciso utilizar "null" dentro dos parenteses.