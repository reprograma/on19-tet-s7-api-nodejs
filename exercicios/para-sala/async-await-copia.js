//indica a função assicrona. importa de outro documento:
//palavra reserva await -> indica que a pulha precisa esperar;
//a palavra try -> captura o erro
//palavra catch -> indica quem recebe o erro

//OBS: para deixar tudo comentado basta vc digitar "/**"
/** */
const {acharUsuaria, acharEndereço} = require("./promises-copia")

const imprimirDados = async (nome, cep) => { //isso indica que é uma função assicrona, devido o await. //aqui é para se for com aronfiction (sem função)

    const usuaria = await acharUsuaria(nome)
    console.log|(usuaria)
} 

imprimirDados("Lydianne")

//se for feita com function, faz assim:
//async function imprimirDados(nome, cep) {}