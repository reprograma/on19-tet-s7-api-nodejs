setTimeout(() => {
    console.log("primeira função assicrona")
}, 1000); // chamando por ultimo mesmo estando primeiro, usando para fazer uma barra de carregamento
function comprimentar(callback){
    console.log("micro task")
    callback("lari" )}// o banco acharia o e-mail 
/*}
const mensagemcallback = () =>{
    console.log("bom dia lari")
}*/
comprimentar((nome) => console.log("bom dia", nome))
console.log("micro task") //callback stack
console.log("good morning, im tired")
console.log("fim da micro task")