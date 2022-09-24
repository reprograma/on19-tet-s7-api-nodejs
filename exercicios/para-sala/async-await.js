const fs = require("fs")
const util = require('util');
const readFileAsync = util.promisify(fs.readFile)

const texto = fs.readFileSync(__dirname + "/info.txt", { encoding: "utf-8"})

async function lerComAsyncAwait(params) {
    const texto = await readFileAsync(__dirname + "/info.txt", { encoding: "utf-8"})
    console.log(texto)
}

async function lerComThen(params) {
  readFileAsync(__dirname + "/info.txt", { encoding: "utf-8"})
    .then((data) => {
      console.log(data)
    })
}

lerComAsyncAwait()
lerComThen()
