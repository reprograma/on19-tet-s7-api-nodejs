//o promise é melhor para o código ficar mais limpo, mais organizado e legivel. isso acontece porque as respostas serão mais especificas (rejeitado ou aceito);
//o promise é a mesma coisa que o callback, só que por aqui sabe se o dado foi rejeitado ou não.
//essa parte é a construção:
const acharUsuaria = (nome) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!nome) {
                return reject ("O nome nao pode ser vazio")
            }
            return resolve ({
                nome,
                email: "email@email.com",
                id: 1234
            })
        }, 1000)
    })
}

const acharEndereço = (cep) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if (!cep) {
                return reject ("O cep precisa ser informado")
            }
            return resolve({
                cidade: "São Paulo",
                sigla: "SP",
                cep
            })
        }, 3000)
    })
}



//essa parte é quando está consumindo:
const imprimirDados = (nome, cep) => {
acharUsuaria(nome).then((usuaria) => {

    console.log("Usuaria carregada")

   return acharEndereço(cep).then((endereço) => {

        return {
            usuaria, endereço
        }
    //console.log(`
   // nome: ${usuaria.nome}
    //email: ${usuaria.email}
   // cep: ${endereço.cep}
   // cidade: ${endereço.cidade}
   // sigla: ${endereço.sigla}
   // `);
   
    });
}).then(dados => {
    console.log(dados)
})
.catch((err) => {
    console.error(err)
});
};

imprimirDados()
//imprimirDados("Jani", "12345-678")
//imprimirDados("mika", null)
//imprimirDados(null, "12345-678")

//aqui é para exportar algo, tudo que estiver dentro dele consegue ser exportado.
module.exports = {
    acharUsuaria, acharEndereço
}