const{dadosEmail} = require("./promise")

const enviarEmail = async(email,mensagem)=>{
    try{
        const mail = await dadosEmail(email,mensagem)
        console.log(mail);
    }catch(err){
        console.log(err)
    }
}