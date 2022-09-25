/*
callback é uma função passada por parâmetro para outra função
(err, data) => {}
(err, usuaria) => {} // detalhamento de "data" que é um termo muito amplo
(err, musica) => {} // idem
*/

// simulamos uma função para achar uma usuária com callback para aplicar as regras de negócioa
const acharUsuaria = (callback) => {
    // recebemos uma "callback" como primeiro parâmetro
    console.log("Carregando usuária...")//"O callback foi chamado");
    setTimeout(function() { // simula uma chamada assíncrona
        console.log("Dados da usuária carregados com sucesso!")//"Nome de usuária carregado com sucesso após 2s")//"Simulado comportamento assíncrono com tempo de carregamento de 2s");
        callback(null, { // o nome da função callback para fins ilustrativos é "callback"
            nome: "Elis",
            email: "e@email.com",
            id: 1234
        })//"")//"Elis")
    }, 2000)
}

/*acharUsuaria(() => {
    // ativamos a callback vazia
});*/

/*acharUsuaria((nome) => {
    // passamos nome como parâmetro
    console.log(nome);
});*/

const acharEndereco = function(callback){
    console.log("Carregando endereço...");
    setTimeout(()=>{
        console.log("Endereço carregado");
        callback(null, {
            cidade: "Taubaté",
            sigla: "SP"
        })
    }, 5000)
}

acharUsuaria((err, usuaria) => {
    // passamos nome como parâmetro
    console.log("Callback chamada:")//nome);
    console.log(err, usuaria);
    if (err) { // aqui aplica-se regras de negócio com trativa de erro, se for o caso, senão, trazer os dados da usuária
        return console.error(err);
    }
   /* console.log(`
        usuaria:  ${usuaria.nome}
        email: ${usuaria.email}
    `);*/
    acharEndereco((err, endereco) => {
        console.log(`
        usuaria: ${usuaria.nome}
        email: ${usuaria.email}
        endereco: ${endereco.cidade} - ${endereco.sigla}
        `);
    })
});


