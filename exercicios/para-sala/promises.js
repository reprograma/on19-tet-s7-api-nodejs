console.clear()

// construção
const acharUsuaria = (nome) => {
    console.log("chamou a promise - achar usuária!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!nome) {
                return reject("O nome não pode ser vazio")
            }
            return resolve({
                nome,
                email: "tipopamela@email.com",
                id: 1234
            })
        }, 1000)
    })
}
const acharEndereco = (cep) => {
    console.log("chamou a promise - achar endereço!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cep) {
                return reject ("O cep precisa ser informado")
            }
            
            return resolve({
                cidade: "São Paulo",
                sigla: "SP",
                cep,
            })
        }, 3000)
    })
}

module.exports = {
    acharUsuaria, acharEndereco
}

//  consumir
const imprimirDados = (nome, cep) => {
acharUsuaria(nome) // trocar o nome por um parâmetro
    .then((usuaria) => {

        console.log("usuaria carregada")

        return acharEndereco(cep).then((endereco) => { // trocar o cep por uma parâmetro

        return {
            usuaria, endereco
        }
    //     console.log(`
    // nome: ${usuaria.nome}
    // email: ${usuaria.email}
    // cep: ${endereco.cep}
    // cidade: ${endereco.cidade}
    // sigla: ${endereco.sigla}
    // `);

        });
    })
    .then(dados => {
        //const { usuaria, dados } = dados
        console.log(dados)
        //     console.log(`
    // nome: ${usuaria.nome}
    // email: ${usuaria.email}
    // cep: ${endereco.cep}
    // cidade: ${endereco.cidade}
    // sigla: ${endereco.sigla}
    // `);

    })
    .catch((err) => {
        console.error(err);
    });

};

// imprimirDados("Pâm", "77777-000")
// imprimirDados("Pâm", null)
// imprimirDados(null, "77777-000")

// se precisar consumir com await
//await Promise.all([acharEndereco("77777-000"), acharUsuaria("Pâm")])

// objeto com letra maiúscula = classe
// Promise.all([acharEndereco("77777-000"), acharUsuaria("Pâm")])
// .then(values => {
//     console.log(values)
// }).catch(erros => {
//     console.log(erros)
// })

