/*
* call back é uma função 
* err(data) => {}
* err(usuaria) => {}
* err(musica) => {}

*/
// simulamaos uma função de achar uma usuaria num api
const findusuaria = (callback) => {// recebe um callback primeiro parametro
setTimeout(function() {
    console.log("usuaria carregada")
    callback(null, {
        nome: "lari",
        email: "larissaleonel98@gmail.com",
        id: 1024
    })
}, 1000)
}
const acharendereço = function (callback)  {
console.log("carregando o enderenço...")
setTimeout(() => {
    console.log("endereço carregado.")
},5000)
}
findusuaria((err, usuaria) => {
console.log("callback chamado")
console.log(err, usuaria)
if (err) {
    return
    console.error(err)
}
acharendereço(()=>{
    
})
console.log(`
usuaria: ${usuaria.nome}
email: ${usuaria.email}
`

)
})