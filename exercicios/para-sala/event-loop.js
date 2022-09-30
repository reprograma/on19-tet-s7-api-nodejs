setTimeout(() => {
    console.log("primeira funcao assincrona")
}, 1000)

function comprimentar(callback) {
  console.log("micro-task")
  callback("Roberta")
}
comprimentar((nome) => console.log("Bom dia", nome))


console.log("1.micro task")//callcastack
console.log("Bom dia meninas, eu estou com sono")
console.log("fim da micro task")