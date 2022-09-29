// criando uma função assicrona (para ter o callback): para fazer vc utiliza algumas funções, como setInterval (executa a cada tempo que vc coloca, ou seja, se voce colocar para executar a cada 1, ele vai a cada um minuto rodar) e o setTimeout (executa apenas uma vez)
setTimeout(() => { //aqui é para ter o callback. essa função só chama o que foi definido
    console.log("Primeira função assicronaa")
}, 1000)

function comprimentar(callback) {
    console.log("Micro-task")
    callback("Mika")
}
comprimentar((nome) => console.log("Bom dia", nome))
//fazendo uma função complementar - um mini callback

//function comprimentar(nome) {
   // console.log("bem vinda: ", nome)
//}
//comprimentar = ("Mika")

//fazendo uma função complementar - um callback
//function comprimentar(callback) {
   // console.log("micro-task")
   // callback("bea")
//}
//comprimentar((nome) => console.log("Bom dia", nome))

//exemplos event loops
console.log("1. micro task") // aqui é callstack
console.log("Bom dia meninas, eu to com sono")
console.log("Fim da micro task")