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
 // cosumir
 acharUsuaria("beatriz").then((usuaria) => {
   console.log(usuaria)
 })
 