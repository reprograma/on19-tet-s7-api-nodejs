/**
 * *entao o callback é uma função
 * *(err, data) => {}
 * (err, usuaria) => {}
 * (err, musica) => {}
 */

const acharUsuaria = (callback) => {
    // recebemos uma calback como primeiro parametro
//console.log("O callback foi chamado")
console.log("Carregando usuaria...")
setTimeout(function() { // simula uma resposta assincrona
console.log("Usuaria carregada")
callback(null, {
    nome: "Gabi",
    email: "gabi.com",
    id: 1234,

})

}, 1000)
}
const acharEndereco = function(callback) {
console.log("Carregando endereco...")
setTimeout(() =>  { 
console.log("endereco carregado")
callback(null, {
    cidade: "São Paulo",
    sigla: "SP"

})

}, 5000)
}


acharUsuaria((err, usuaria) => {
    console.log("Callback chamado")
    //console.log(err, usuaria)
    if (err){
        return console.error(err)
    }
    acharEndereco((err, endereco) =>{
   console.log(`
usuaria: ${usuaria.nome}
email: ${usuaria.email}
endereco: ${endereco.cidade} - ${endereco.sigla}
`)
})
})
