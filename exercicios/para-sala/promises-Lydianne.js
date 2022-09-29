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
const imprimirDados = (nome,cep) => {
acharUsuaria(nome) // trocar por um parametro
    .then((usuaria) => {

        console.log("Usuaria carregada.")

        return acharEndereco(cep).then(endereco => {//vamos trocar aqui
return{
    usuaria, endereco
}
    /*console.log(`
    nome: ${usuaria.nome}
    email: ${usuaria.email}
    cep: ${endereco.cep}
    cidade: ${endereco.cidade}
   sigla: ${endereco.sigla}
    `);*/

    })
    }).then(dados =>{
        console.log(dados)
    })
    .catch((err) => {
        console.error(err);
    });

};

/*imprimirDados("Lydianne", "12345-078")
imprimirDados("Anne", null)
imprimirDados(null, "12347-889")*/
module.exports = {
    acharUsuaria, acharEndereco
}
