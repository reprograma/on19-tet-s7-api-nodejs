console.log("\nTentando enviar e-mail...")

//hora de construir

const acharEmail = (email) => { //criando uma constante para encontrar o e-mail que procuramos
    return new Promise((resolve, reject) => { //criando uma promisse que nos indicará o que fazer se o e-mail for aceito ou rejeitado
        setTimeout(() => { //definindo um temporizador para a resposta
            if (!email) {
                return reject("\nO e-mail não pode ser vazio.\n\nFalha ao enviar.\n") //criando uma mensagem de rejeição, caso usuária não preencha e-mail
            }
            return resolve({ //se tudo tiver certo, retornar e-mail
                email
            })
        },1000) //tempo definido de 1 segundo
    })
}

//hora de consumir

const imprimirEmail = (email) => { //criar essa função que imprimirá o e-mail que queremos
    acharEmail(email).then((usuaria) => { //criar o achar e-mail, que é o parâmetro que queremos encontrar e em seguida o usuaria, nome qualquer 
        console.log(`
            Para: ${usuaria.email}
            Assunto: Resolução de exercício
            ---------------------------------------
            Mensagem: Para conseguir realizar esse exercício será necessário combinar todos os conhecimentos adquiridos em aula... 
        `); //acima, mensagem que será impressa
        setTimeout(() => { //definindo um tempo para retorno de mensagem de sucesso
            console.log("E-mail enviado com sucesso!\n")
        },2000)
        return {usuaria} //em caso de sucesso, o retorno é o e-mail da usuária
    }).catch((err) => { //aqui mandamos o código pegar o erro, se houver
        console.error(err)
    })
};

//Caso queira imprimir o e-mail corretamente, use o imprimirEmail abaixo:
imprimirEmail("biancatrindade.mkt@gmail.com") //eu poderia ter usado o e-mail aqui ou só escrever ("email") e ter colocado o e-mail na linha 12, ficando email: "biancatrindade.mkt@gmail.com"

//Caso queira mensagem de erro, use o imprimirEmail abaixo:
//imprimirEmail(null)