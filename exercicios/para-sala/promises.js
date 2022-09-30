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
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(!cep) {
          return reject("O cep precisa ser informado")
        }
       return resolve({
        cidade: "Paulista",
        sigla:"PE",
        cep
       })       
    }, 3000)
   })
 }
 module.export = {
    acharUsuaria, acharEndereco
 } 



 // cosumir
 const imprimirDados = (nome, cep) => {
    acharUsuaria(nome).then((usuaria) => {
        console.log("Usuaria carregada")
      
        return acharEndereco(cep).then((endereco) => {
        return {
            usuaria, endereco
        }
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
 .then(dados => {
    const { usuaria, endereco } = dados
    //console.log(dados)
})
 .catch((err) => {
    console.error(err)
 });
};

/*imprimirDados("Jani", "1234567")
imprimirDados("Roberta", null)
imprimirDados(null, "1234567")
*/

module.exports = {
   acharUsuaria,acharEndereco
}