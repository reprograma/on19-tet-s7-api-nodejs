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
   return new Promise((resolve, reject) => {
     setTimeout(() => {
 
       if (!cep) {
         return reject("O cep precisa ser informado")
       }
 
       return resolve({
         cidade: "Sao Paulo",
         sigla: "SP",
         cep
       })
 
     }, 3000)
   })
 }
 
 // cosumir
 acharUsuaria("beatriz").then((usuaria) => {
 
   acharEndereco("12345-078").then((endereco) => {
 
   console.log(`
    nome: ${usuaria.nome}
    email: ${usuaria.email}
    cep: ${endereco.cep}
    cidade: ${endereco.cidade}
    sigla: ${endereco.sigla}
    `)
 
   })
 }).catch((err) => {
   console.error(err)
 })
 