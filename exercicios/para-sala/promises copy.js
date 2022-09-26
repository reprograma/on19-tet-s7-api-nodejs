console.log("Carregando usuária...")

//construção
const acharUsuaria = (nome) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!nome) {
                return reject("O nome não pode ser vazio.")
            }
            return resolve({
                nome,
                email: "biancatrindade.mkt@gmail.com",
                id: "biatrindade"
            })
        }, 1000)
    })
}

const acharEndereco = (cep) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!cep){
                return reject("O cep precisa ser informado")
            }    
            return resolve({
                cidade: "Amsterdam",
                pais: "The Netherlands",
                cep
            })
        }, 3000);
    })
}

//consumir
const imprimirDados = (nome, cep) =>{
    acharUsuaria(nome).then((usuaria) => { //troca o nome por um parâmetro
        console.log("Usuária carregada.")
    return acharEndereco(cep).then((endereco) => { //também troca o postcode por um parâmetro

        return {
            usuaria, endereco
        }
       /* console.log(`
            Nome: ${usuaria.nome},
            Email: ${usuaria.email},
            Postcode: ${endereco.cep},
            Cidade: ${endereco.cidade},
            País: ${endereco.pais}
        `); */
    });
    }).then(dados => {
        console.log(dados)
    }).catch((err) =>{
    console.error(err)
})
};

//imprimirDados("Bianca", "1012");
//imprimirDados("Jujuba", null);
imprimirDados(null,"1015")



