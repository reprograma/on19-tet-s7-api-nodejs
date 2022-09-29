setTimeout(() => {
    console.log("primeira funcao assincrona")
  }, 1000)
  
  function comprimentar(callback) {
    console.log("micro-task")
    // banco acharia o email dela
    callback("bea")
  }
  
  
  comprimentar((nome) => console.log("Bom dia", nome))
  
  console.log("1. micro task") // callcastack
  console.log("Bom dia meninas, eu to com sono")
  console.log("fim da micro task")
  