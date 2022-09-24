// construção
const acharUsuaria = (nome) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!nome) {
                return reject("O nome não pode ser vazio")
            }
            return resolve({
                nome,
                email: "lydianne.correa@email.com",
                id: 1234
            })
        }, 1000)
    })
}
const acharEndereco = (cep) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cep) {
                return reject ("O cep precisa ser informado.")
            }
            
            return resolve({
                cidade: "Recife",
                sigla: "PE",
                cep
            })
        }, 3000)
    })
}

//  consumir
const imprimirDados = () => {
acharUsuaria("Lydianne")
    .then((usuaria) => {

        console.log("Usuaria carregada.")

        acharEndereco("12345-078").then((endereco) => {

        console.log(`
    nome: ${usuaria.nome}
    email: ${usuaria.email}
    cep: ${endereco.cep}
    cidade: ${endereco.cidade}
    sigla: ${endereco.sigla}
    `);

        });
    })
    .catch((err) => {
        console.error(err);
    });

};

imprimirDados()