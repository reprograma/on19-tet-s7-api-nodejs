//promisse
const verificaEmail = (email, message, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && message) {
          resolve({ email, message });
        } else {
          reject("endereço de Email inválido");
        }
      }, time);
    });
  };
  
  const consumidor = (email, mensagem, time) => {
    verificaEmail(email, mensagem, time)
      .then(() => {
        console.log(`
          #############################################
          # Email enviado com sucesso para ${email}  
          #############################################`);
        console.log(`
          Assunto: Exercício de casa
          --------------------------------
          ${mensagem}\n
          --------------------------------`);
      })
      .catch((err) => {
  
        console.log(`
          #############################################
          # ${err} - Email não enviado para ${email}"
          #############################################`);
        console.error();
      });
  };
  
  const sender = () => {
  const end = ["teste@teste.com.br", null];
  const msg =`Olá, tudo bem? \n
          Estou enviando este email para testar o envio de email com Node.js`;
  const time = 5000;
  
  for (i in end) {
    console.log("--------------------------------");
    console.log("enviando email para: " + end[i]);
    console.log("--------------------------------");
    consumidor(end[i], msg, time+i*5000);
  
  }}
  
  sender();