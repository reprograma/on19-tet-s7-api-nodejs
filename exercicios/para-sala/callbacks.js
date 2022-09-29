
const acharUsuaria = (callback) => {
    console.log("Carregando usuária");
    setTimeout(() => {
        console.log("Usuária carregada");
        callback(null, {
            nome: "Laura",
            email: "laumedeia@email.com",
            id: 1377
        });
    }, 1000);
}

const acharEndereco = function(callback) {
    console.log("Carregando o endereço...");
    setTimeout(() => {
        console.log("Endereço carregado.");
        callback(null, {
            cidade: "Curitiba",
            sigla: "CWB"
        })
    }, 5000);
}

acharUsuaria((err, usuaria) => {
    console.log("Callback chamado.");
//console.log(err, usuaria);
    if (err) {
        return console.error(err)
    }
    
    acharEndereco((err, endereco) => {
        console.log(`
        usuaria: ${usuaria.nome}
        email: ${usuaria.email}
        endereço: ${endereco.cidade} - ${endereco.sigla}
        `);
    })
})