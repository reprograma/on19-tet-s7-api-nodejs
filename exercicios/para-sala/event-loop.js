setTimeout(() =>{
  console.log("Estou em primeiro lugar do código mas vou ser chamado por ultimo. sou uma função assincrona")
}, 5000) // usado para poder executar uma ação a cada determinado tempo. no front ele é utilizado para fazer aquele tempo das barras de carregamento. 

function cumprimentar(nome){
  console.log(`Bem vinda, ${nome}`)
}
cumprimentar("Mari")// essa função apareceu em primeiro lugar do meu terminal. ela não tem nada que vá chamar em segundo plano.

function cumprimentarComCallback(callback){
  console.log("micro-task do callback")
  callback()
}

cumprimentarComCallback(() => console.log("Bom dia com callback"))// é chamado depois da minha função processar 

console.log("1 - Micro Task")
console.log("Bom dia, meninas. Eu tô com sono")
console.log("Fim da Micro Task")