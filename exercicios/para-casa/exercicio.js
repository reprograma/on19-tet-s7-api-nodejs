const typeTheEmail = (email) => {
    console.log('Tentando enviar a mensagem, por favor escreva o email.')
    return new Promise((resolve, reject) => {
    setTimeout(() => {
     if (!email) {
      return reject("O e-mail não pode estar vazio. ")
      }
      return resolve({
       email,

      })
     }, 1000)
    })
  }

  const message = (mensagem) => {
    console.log('Escreva a mensagem')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (!mensagem){
                return reject ('O campo da mensagem não pode estar vazio.')
            }
            return resolve ({
                mensagem,
            })
        }, 5000)
    })
  };

  const printing = (email, mensagem) => {
    typeTheEmail(email)
     .then((user) => {
      return message(mensagem).then(text => {
      return {
          user, text
      }

      })

    })
    .then(data =>{
      console.log(data)
      console.log("Email foi enviado com sucesso")
      })
     .catch((err) => {
      console.log(err)
   });
  };

  imprimirDados("aurora.email")



   
   
