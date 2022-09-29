const acharUsuaria = (nome) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!nome) {
          return reject("O nome não pode ser vazio");
        }
        return resolve({
          nome,
          email: "cibellinhasenabh@gmail.com",
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
          cidade: "Belo Horizonte",
          sigla: "BH",
          cep,
        });
      }, 3000);
    });
  };
  
  module.exports = {
      acharUsuaria , acharEndereco
  }
  const imprimirDados = (nome, cep) => {
    acharUsuaria(nome)
      .then((usuaria) => {
        console.log("Usuaria Carregada");
  
        return acharEndereco(cep).then((endereco) => {
          return {
            usuaria,
            endereco,
          };
  
          /* console.log(`
     nome: ${usuaria.nome}
     email: ${usuaria.email}
     cep: ${endereco.cep}
     cidade: ${endereco.cidade}
     sigla: ${endereco.sigla}
     `);
     });*/
        });
      })
      .then((dados) => {
        console.log(dados);
      })
  
      .catch((err) => {
        console.error(err);
      });
  };
  
  //imprimirDados("Jani", "12345-678");
  //imprimirDados("Ci", null)