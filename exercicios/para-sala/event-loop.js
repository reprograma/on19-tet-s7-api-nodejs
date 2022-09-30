setTimeout(() => {
<<<<<<< HEAD
    console.log("primeira funcao assincrona")
=======
  //... carregando dados do banco ou servidor
  console.log("primeira funcao assincrona")
>>>>>>> cb6934c7b43dc64e1cbab0886b466e1f01a8d44e
}, 1000)

function comprimentar(callback) {
  console.log("micro-task")
<<<<<<< HEAD
  callback("Roberta")
}
comprimentar((nome) => console.log("Bom dia", nome))


console.log("1.micro task")//callcastack
console.log("Bom dia meninas, eu estou com sono")
console.log("fim da micro task")
=======
  // banco acharia o email dela
  callback("bea")
}


comprimentar((nome) => console.log("Bom dia", nome))

console.log("1. micro task") // callcastack
console.log("Bom dia meninas, eu to com sono")
console.log("fim da micro task")

>>>>>>> cb6934c7b43dc64e1cbab0886b466e1f01a8d44e
