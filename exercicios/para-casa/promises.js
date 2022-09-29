
const emailUsuaria = (email) => {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            if (!email) {
                return reject("O email não pode estar vazio")
            }
            return resolve({
                email
            })
        }, 2000);
    });
};
console.log("tentando enviar email...");

const printMail = (email) => {
    emailUsuaria(email).then((usuaria) => {
        console.log(
            `De: ${usuaria.email}\n
             Assunto: Hello Word \n
             Para conseguir realizar esse exercício será necessário combinar todos os conhecimentos adquiridos em aula... ` + "\n");
    
            setTimeout(() => {
                console.log("email enviado com sucesso!");
            }, 2000);
            return {usuaria}
            })
            .catch((err) =>{
                console.error(err);
            })

   
}

printMail("karen.ferrazribeiro@hotmail.com");


