setTimeout(() => {
    console.log("pimeira funcao assincrona")
}, 1000)


//function cumprimentar(nome){
//console.log("Bem vinda:",  nome)    
//}

function cumprimentar(callback){
    console.log("micro-task")
    //banco acharia o emael dela
    callback("Gabi")
}

//const mensagemCalback = () => {
//    console.log("bom dia")
//}

cumprimentar((nome) => console.log(" Bom dia", nome))

console.log("1. micro task")
console.log("Bom dia, meninas")
console.log("fim da micro taks")