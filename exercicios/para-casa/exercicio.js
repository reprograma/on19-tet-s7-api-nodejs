const encontrarEmail = (email, mensagem) =>{
    return new Promise ((resolve, reject) =>{
      setTimeout(()=>{
        if (!email){
          return reject ("Falha no envio")
        }
        return resolve (({
          para: email, 
        }).para)
      }, 3000)
    }).then (mensagem = texto =>
      console.log(texto))
  }