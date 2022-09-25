// construção da promise
const acharUsuaria = (nome) => { // (email) => {
    return new Promise((resolve, reject) => { // estamos criando uma instância da promise com duas callbacks de parâmetro
        setTimeout(() => {
            if (!nome) {
                return reject("O nome não pode ser vazio")
            }
            return resolve({
                nome, // abreviação de nome: nome,
                email: "e@email.com",
                id: 1234
            }, 1000)
        });
    })
};

const acharEndereco = (cep) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cep) {
                return reject("O cep precisa ser informado")
            }

            return resolve({
                cidade: "Taubaté",
                sigla: "SP",
                cep
            })

        }, 3000)
    })
}

// consumir a promise
const imprimirDados = (nome, cep/*vazio antes*/) => {
acharUsuaria(nome/*"Elis"*/).then((usuaria) => {
    console.log("Dados da usuária carregados com sucesso!");

    return acharEndereco(cep/*"12000-000"*/).then((endereco) => { // exemplo de promise hell (uma promise dentro de outra promise sem utilizar a palavra reservada return) 
    return {
        usuaria, endereco
    }

});
}).then(dados => {
    const {usuaria, endereco} = dados; // desestruturação de objeto para apresentar os dados como no console.log anterior. Sem essa linha volta o log comentado abaixo em formato de objeto
    //console.log(dados);

    console.log(`
    nome: ${usuaria.nome}
    email: ${usuaria.email}
    cep: ${endereco.cep}
    cidade: ${endereco.cidade}
    sigla: ${endereco.sigla}
    `)//usuaria)
}).catch((err) => {
    console.error(err);
})

};

//imprimirDados("Elis", 12000000/*vazio antes*/);
//imprimirDados("Eu", null);
//imprimirDados(null, 12000000);

module.exports = {
    acharUsuaria, acharEndereco
}