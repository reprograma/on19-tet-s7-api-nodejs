const enviarEmail = (email, msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email) {
        return reject(
          'Falha ao enviar o email! O endereço do destinário precisa ser preenchido'
        )
      }
      return resolve(
        {
          para: email
        }.para
      )
    }, 2000)
  }).then((mensagem = texto => console.log(texto)))
}

const emailEnviado = (email, msg) => {
  console.log('Tentando enviar email..')
  enviarEmail(email, msg)
    .then(() => {
      console.log(`
      Assunto: Exercício de casa "Simulação de envio de email"
      _________________________________________________
      
      ${msg}\n`)
      console.log('Email enviado com sucesso!!')
    })
    .catch(err => {
      console.error(err)
    })
}

emailEnviado('mellyssa@email.com', 'Realiza envio do email')
//emailEnviado("mellyssa@email.com", null);
//emailEnviado("mellyssa@email.com");

emailEnviado(null, 'Erro-SemEnderecoEmail')

const simularEnvioEmail = async (toMail, msg) => {
  console.log('Tentando enviar email..')
  try {
    const destinataria = await enviarEmail('Para: ' + toMail)
    const msgEmail = await enviarEmail(msg)
    console.log('Email enviado com sucesso!!')
  } catch (err) {
    console.log(err)
  }
}

simularEnvioEmail(
  'mellyssa@email.com',
  'Exercício para casa usando métodos async/await'
)
