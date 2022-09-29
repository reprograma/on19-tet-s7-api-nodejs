const superagent = require("superagent")

const consumirApi = async () => {
  const alunas = await superagent.get("https://teste-para-aula-introducao-js.vercel.app/api/alunas")
  console.log(`status: ${alunas.status}`, alunas.body)
}

consumirApi()