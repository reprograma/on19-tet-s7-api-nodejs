setTimeout(() => {
    console.log("Primeira função assíncrona");
}, 1000); // função assíncrona

/*function cumprimentar(nome) { // exemplo de função simples recebendo nome como parâmetro
    console.log("Bem-vinda: ", nome);
}*/

function cumprimentar(callback) { // exemplo de função sínccrona recebendo outra função (callback) de parâmetro
    console.log("Micro-task");
    callback("Elis") // callback recebe o nome como parâmetro
}

cumprimentar((nome) => console.log("Bom dia,", nome)); // execução da função com callback

const mensagemCallback = () => {
    console.log("Mandou bem, mana");
}

mensagemCallback();

console.log("1. micro task"); // executa a callstack
console.log("Sim, eu acordei empoderada hoje");
console.log("fim da micro teste");