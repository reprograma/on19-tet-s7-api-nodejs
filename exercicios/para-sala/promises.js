// construcao
const acharUsuaria = (nome) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (!nome) {
         return reject("O nome nao pode ser vazio")
       }
       return resolve({
         nome,
         email: "email@emai.com",
         id: 1234
       })
     }, 1000)
    })
 }
const acharEndereco = (cep) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (!cep) {
                return reject("o cep precisa ser informado")
            }
            return resolve({
                cidade: "São Paulo",
                sigla: "SP",
                cep
            })
        }, 3000)
    })
};

module.exports = {
    acharUsuaria, acharEndereco
}


 // cosumir

 const imprimirDados = (nome, cep) =>{
   
 acharUsuaria("nome")
 .then((usuaria) => {

    console.log("usuaria carregada")
    
 return acharEndereco(cep).then((endereco) => {

 
return {
    usuaria, endereco
}

   //console.log(`
   //nome: ${usuaria.nome}
   //email: ${usuaria.email}
   //cep: ${endereco.cep}
   //cidade: ${endereco.cidade}
   //sigla: ${endereco.sigla}
  // `)

   });
 })
 .then(dados => {
    console.log(dados)
 })
 .catch((err) => {
    console.error(err);
 });
};

//imprimirDados("Gabi", "12345-678")

module.exports = {
    acharUsuaria, acharEndereco
}