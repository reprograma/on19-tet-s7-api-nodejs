const fs = require("fs")


console.log("Bom dia")

setTimeout(() => {
  console.log("Queue:", "hoje apredemos event-loop")
  console.log("Fim da callstack")
}, 0)

// console.log("processando info em segundo plano")
// fs.readFile(__dirname + "/info.txt", { encoding: "utf-8"}, (err, info) => {
//   console.log(info)
//   console.log("fim da call stack")
// })

console.log("call stack: ")

// exemplo

// function elogiar(nome) {
//     console.log(nome +", você é linda!")
// }

// function parabenizar(nome) {
//     console.log(nome +", parabéns pelo seu dia princesa!")
// }
  
// function cumprimentar(callback) {
//     let nome = 'Liniker'
//     return callback(nome)
// }

// cumprimentar(elogiar)
// cumprimentar(parabenizar)

// cumprimentar((nome) => console.log(nome + ', você é feia!'))

// cumprimentar(function xingar(nome) {
//     console.log(nome + ', você é feia!')
// })


console.log("Fim da callstack")
