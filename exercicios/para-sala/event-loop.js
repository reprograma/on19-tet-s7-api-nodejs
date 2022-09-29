setTimeout(() => {
<<<<<<< HEAD
    //... carregando dados do banco ou servidor
    console.log("primeira função Assincrona")
}, 1000)

function comprimentar(callback){
    console.log("micro-task")
    // Banco acharia o email dela
    callback("Anne")
}


comprimentar((nome)=> console.log("Bom dia," , nome))

console.log("1. micro task") // callcastack
console.log("Bom dia meninas, eu to com sono!")
console.log("fim da micro task")
=======
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

>>>>>>> cb6934c7b43dc64e1cbab0886b466e1f01a8d44e
