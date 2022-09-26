
console.clear();

setTimeout(() => {
    console.log("Primeira função assincrona")
}, 1000) //1000 representa 1 segundo, se for 10 segundos, seria 10000 ou 10*1000

function comprimentar (callback) {
    console.log("micro-task")
    // banco achar o email da pessoa
    callback("Bia")
}

comprimentar((nome) => console.log("Bom dia,", nome))

console.log("1. micro task") //callstack
console.log("Bom dia, meninas. Eu to com sono :D")
console.log("Fim da micro task")
=======
setTimeout(() => {
  //... carregando dados do banco ou servidor
  console.log("primeira funcao assincrona")
}, 1000)

function comprimentar(callback) {
  console.log("micro-task")
  // banco acharia o email dela
  callback("bea")
}


comprimentar((nome) => console.log("Bom dia", nome))

console.log("1. micro task") // callcastack
console.log("Bom dia meninas, eu to com sono")
console.log("fim da micro task")


