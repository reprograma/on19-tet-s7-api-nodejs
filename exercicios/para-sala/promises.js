
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

module.exports = {
    acharUsuaria, acharEndereco
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
//imprimirDados(null,"1015")
=======
// construcao
const acharUsuaria = (nome) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!nome) {
        return reject("O nome nao pode ser vazio");
      }
      return resolve({
        nome,
        email: "email@emai.com",
        id: 1234,
      });
    }, 1000);
  });
};

const acharEndereco = (cep) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!cep) {
        return reject("O cep precisa ser informado");
      }

      return resolve({
        cidade: "Sao Paulo",
        sigla: "SP",
        cep,
      });
    }, 3000);
  });
};

module.exports = {
  acharUsuaria, acharEndereco
}

// cosumir
const imprimirDados = (nome, cep) => {
  acharUsuaria(nome) // trocar o nome por um parametro
    .then((usuaria) => {

      console.log("usuaria carregada")

      return acharEndereco(cep).then((endereco) => { // vamos trocar tbm

      return {
        usuaria, endereco
      }
  //       console.log(`
  //  nome: ${usuaria.nome}
  //  email: ${usuaria.email}
  //  cep: ${endereco.cep}
  //  cidade: ${endereco.cidade}
  //  sigla: ${endereco.sigla}
  //  `);

      });
    })
    .then(dados => {
      const { usuaria, endereco } = dados
      console.log(dados)
  //   console.log(`
  //     nome: ${usuaria.nome}
  //     email: ${usuaria.email}
  //     cep: ${endereco.cep}
  //     cidade: ${endereco.cidade}
  //     sigla: ${endereco.sigla}
  //  `);
    })
    .catch((err) => {
      console.error(err);
    });
};

// imprimirDados("Jani", "12345-678")
// imprimirDados("Bea", null)
