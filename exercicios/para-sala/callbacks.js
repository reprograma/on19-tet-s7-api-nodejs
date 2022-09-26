/*
O callback é uma função
(err, data) => {}
(err, usuaria)=>{}
(err,musica)=>{}
*/
//simulamos uma função de achar uma ususaria
const acharUsuaria = (callback)=>{ 
  //recebemos uma callback como primeiro parametro
  console.log("Carregando ususaria");
  setTimeout(function(){ // simula uma resposta assincrona
      console.log("Usuaria carregada");
      callback(null,{
          nome:"Shirlene",
          email:"shi@gmail.com",
          id:123
      })
  },1000)
}

const acharEndereco = function(callback){
  console.log("Carregando endereço...");
  setTimeout(()=>{
      console.log("Endereço carregado");
      callback(null,{
          cidade:"Praia Grande",
          sigla:'SP'
      })
  },5000)
}

acharUsuaria ((err, usuaria)=>{
  console.log("Callback chamado");
  //console.log(err, usuaria);
  if(err){
      return console.error(err)
  }
  acharEndereco((err, endereco)=>{
      console.log(`
      usuaria: ${usuaria.nome}
      email: ${usuaria.email}
      endereço:${endereco.cidade} - ${endereco.sigla}
      `)
  })
})

