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
// imprimirDados(null, "12345-789")