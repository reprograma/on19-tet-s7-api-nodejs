

const acharUsuaria = (nome) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!nome) {
                return reject("O nome não pode ser vazio.")
        }
           return resolve({
            nome: "Laura",
            email: "laumedeia@email.com",
            id: 1377
           }) 
        }, 1000 );
    })
}

const acharEndereco = (cep) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cep) {
                return reject("O CEP precisa ser informado.")
            }
            return resolve({
                cidade: "Maringá",
                sigla: "MGA",
                cep
            })
        }, 3000);
    })
}

const printData = (nome, cep)  => {
    acharUsuaria(nome)
     .then((usuaria) => {
     
        console.log("Usuária carregada.");

    return acharEndereco(cep).then((endereco) => {

    return {
        usuaria, endereco
    }

    

    })
    .then(dados => {
        const {usuaria, endereco} = dados
        console.log(dados);
       console.log(`
    nome: ${usuaria.nome}
    email: ${usuaria.email}
    cep: ${endereco.cep}
    cidade: ${endereco.cidade} - ${endereco.sigla}
    `)          
    })
}).catch((err) => {
    console.error(err)
})}

//printData("Laura", 87020000)
//printData(null, 87020000)

module.exports = {
    acharUsuaria, acharEndereco
}