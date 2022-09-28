
/*
 [ ] Consumir a promise de envio de email com erro.

console:
```bash
  tentando enviar email...

  falha ao enviar o email.
*/

const verificarEmail = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email) {
        return reject();
      }
      return resolve({
        email
      });
    }, 1000);
  })
  .catch(() => {
    console.log("\nO email esta incorreto");
  });
};

const verficarMensangem = (mensagem) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!mensagem) {
        return reject("O campo mensagem não pode estar vazio");
      }
      return resolve({
        mensagem
      });
    }, 1000);
  });
};

const imprimirDados = (email, mensagem) => {
  verificarEmail("greicepereira2020@gmail.com").then((destinataria) => {
    console.log("\nTentando enviar email...");
    verficarMensangem("")
      .then((usuaria) => {
        console.log(`
          Para: ${destinataria.email}
          -----------------------------------------
          Mensagem: ${usuaria.mensagem}
          `);
        console.log("Email enviado com sucesso.");
      })
      .catch(() => {
        console.log("\nFalha ao enviar o email.");
      });
  }, 3000);
};

imprimirDados();
