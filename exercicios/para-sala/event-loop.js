setTimeout(()=>{
  console.log("Primeira função assincrona");
},1000)

function comprimentar(callback) {
  console.log("micro-task")
  // banco acharia o email dela
  callback("Shi")
}


comprimentar((nome) => console.log("Bom dia", nome))



console.log('1. micro task');
console.log('Bom dia meninas, estou com sono')
console.log('Fim da micro task');