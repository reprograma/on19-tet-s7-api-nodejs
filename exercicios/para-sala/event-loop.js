setTimeout(() => {
  //... carregando dados do banco ou servidor
  console.log("primeira função assíncrona");
}, 1000) // leva um tempo a mais para ser processado, embora esteja no começo do código ele vai aparecer por último no terminal
// atualiza a cada um segundo. 

function cumprimentar(callback) {
  console.log("micro-task")
  callback("Pâm")
}

cumprimentar((nome) => console.log("Bom dia", nome)) // callback pode ser uma arrow function ou uma função básica


console.log("1. micro task"); // callStack
console.log("Bom dia! Sabadou!");
console.log("fim da micro task");
