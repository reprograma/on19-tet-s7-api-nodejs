<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 19 - Todas em Tech | Back-end | Semana 7 | 2022 | Beatriz Ramerindo

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
- [Add outras intrucoes caso necessario]

### Resumo

O que veremos na aula de hoje?

- [Event Loop](#event-loop)
- [Callbacks](#callbacks)
- [Promise](#promise-1)
- [Async Await](#async-await-1)
- [Captura de Erros](#captura-de-erros-1)
## Conteúdo

### Event Loop

1. [CallStacks](#callstacks)
2. [Task Queue](#task-queue)
### Callbacks

1. [Exemplo de callback](#exemplos-de-uso-para-callback)

2. [Callback Hell](#exemplo-de-mau-uso-de-callback)

### Promise
1. [Resolve](#resolve)
2. [Reject](#reject)
3. [Promise Hell](#promise-hell)
4. [Consumindo uma Promise](#then---consumo-de-promises)


### Async Await
1. [Introdução](#async-await-1)


### Captura de Erros
1. [Introdução](#captura-de-erros-1)


### Event Loop

- A fila de eventos (Event Loop) é responsável por enviar novas funções que foram resolvidas de forma assíncrona para a trilha principal de processamento (Call Stack), seguindo a estrutura de dados da fila (Callback Queue) assim mantendo a sequência correta de execução dos eventos/funções;

![](https://miro.medium.com/max/720/1*4SoPLMu-BDKU83RTOsSm1w.png)

font: [medium](https://fabiojanio.medium.com/introdu%C3%A7%C3%A3o-ao-node-js-single-thread-event-loop-e-mercado-46edd82c1faf#:~:text=Single%2DThread-, O%20Node., %C3%BAltima%20entrada%2C%20primeira%20sa%C3%ADda)

| Topico | Descrição |
| ----------- | ----------- |
| CallStacks | Title |
| Paragraph | Text |

#### CallStacks

É uma pilha de funções que serão processadas pelo event-loop. No nodeJs ela é single-threading.

- Seu comportamento é do tipo LIFO, execulta e remove o ultimo da pilha(mais antigo), adiciona novos eventos no começo da pilha
- É priorizado as micros-tasks e após isso, as macro-tasks
- Pode ocorrer processos em segundo plano multi-theading

#### Task Queue

Ela é execultada em segundo plano, geralmente numa operação demorada, como carregar um arquivo, após o processamento a callback é retornada para a callstack para ser processada.


<details>
<summary> Micro-tasks - Exemplos </summary>

```javascript

array.forEach(callback | function {} | () => {})

addEventListener("click", callback | function {} | () => {})

Promise.resolve().then(callback | function {} | () => {})

```

</details>

<details>
<summary> Macro-tasks - Exemplos </summary>

```javascript
setTimeout(function() {} | () => {}, time)
setInterval(function() {} | () => {}, time)
fs.readSync("file.txt",function() {} | () => {})
```
</details>

### Callbacks

O callback ou `chamada de retorno` geralmente é utilizado para chamadas assincronas ou em métodos como o forEach. Seu objetivo é dar flexibilidade a nós desenvolvedora durante o desenvolvimento.

<details>
<summary>Exemplos de uso para callback</summary>

1. Para consumo de APIs ou operações no banco de dados.

```javascript
// arrow function
const mensagemlCallback = (nome) => {
  console.log(`bom dia`, nome)
}

// function
function mensagemlCallback(nome) {
  console.log(`Bom dia`, nome)
}


setTimeout(mensagemCallback, nome)


```

```javascript
db.find((err, data) => {
   if (err) return "Ocorreu um erro"
   res.status(200).json(data)
})
```

2. Para métodos de bibliotecas ou framework

```javascript
arr.forEach(elemento, indice, arr) => {
   console.log(elemento, indice, arr)
});
```

3. Para testes automatizados

```javascript
test("Primeia aula sobre callbacks", () => {
  expect(true).toEqual(true)
});
```

4. Em URLS

`$ curl localhost/auth?callbackUrl=localhost/app`

```javascript
router.get("/app", controller.app);
```

</details>

#### Callback Hell

Mas o seu uso deve ser conciente, porque embora forneca muita flexibilidade no desenvolvimento, pode tornar o codigo confuso, pouco légivel e bugs.

##### Exemplo de mau uso de callback

```javascript
  arr.forEach(item => {
    item.forEach(item2 => {
       item2.forEach(item3 => {
          item3.forEach(item4 => {
            item4.forEach(item5 => {
              ...
            })
          })
       })
    })
  })
}
```

### Promise

- Promise é um objeto do JavaScript que tem a função de lidar com assincronicidade através de estados;
- Funções assíncronas modernas retornam uma promise que representa a eventual falha ou conclusão de uma operação assíncrona, assim uma função assíncrona retorna um valor como uma função síncrona, porém no lugar do valor final, retorna uma promessa ao valor em algum momento no futuro;
- Ciclo de vida da Promisse (estados):

  | Estado     | Significado                                                                                  |
  | ---------- | -------------------------------------------------------------------------------------------- |
  | Pending    | Estado inicial, quando a promise ainda está em execução (não resolveu ou rejeitou)           |
  | Fulfilled  | Quando executou todas as operações com sucesso                                               |
  | Rejected   | Quando a execução finalizou com erro, falhou                                                 |
  | Settled    | Nome genérico para estado final de executado, independente de ter retornado sucesso ou erro  |

<br>
<br><br>

- Cria-se uma promise a partir da função construtora Promise passando como argumento uma callback que por sua vez recebe como argumentos os dois resultados possíveis para a promise: resolve ou rejeit, duas outras funções que executam o possível sucesso ou erro da promessa, respectivamente;
- `resolve()`: Função que executa caso a promise seja resolvida;
- `reject()`: Função que executa caso a promise seja rejeitada;
- Resolvemos as promises através de métodos próprios, que chamam as callbacks depois da conclusão da promise;
- `then()`: Método que ativa uma callback quando a promise for resolvida, o argumento desta callback é sempre o valor retornado na função resolve();
  - o then() retorna uma nova promise e por isso vários thens podem ser encadeados para casos onde existam duas ou mais operações assíncronas consecutivas, neste caso o valor do primeiro argumento de cada then encadeado será o valor do retorno do anterior; 
- `catch()`: Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject();
- `finally()` -  Método que ativa uma callback quando a promisse acabar, independente de ter sido resolvida ou rejeitada, não recebe como argumento o retorno de resolve() ou reject();


<details>
<summary>Exemplo como criar uma promise</summary>

```javascript
  // exemplo de sucesso
  const promise = () => {
  return new Promise((resolve, reject) => {
      const nome = "Beatriz"
      if (nome === null) {
        return reject(new Error("Nome nao pode ser nulo"))
      }
      // salva no banco de dados
      return resolve(nome)
    })
  }

console.log(promise())
/* resultado: 
Promise {
  'Beatriz',
  [Symbol(async_id_symbol)]: 125,
  [Symbol(trigger_async_id_symbol)]: 5,
  [Symbol(destroyed)]: { destroyed: false }
}
*/
```

</details>

#### Promise Hell
Assin como acontece com as funções com o callback hell, se as promises não forem usadas aplicando boas praticas de desenvolvimento, podem ser um problema para a saúde do codigo.

```javascript
promise1()
  .then(() => {
    return promise2()
      .then(() => {
        return promise3();
      });
  });
```
### Async Await 
- As palavra-chaves async e await ajudam a consumir uma promise de forma mais simples, ela deixa o código limpo e evita o problema dos callback hell.
- Toda função que recebe o `async` se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente, como uma promise o retorno desta função pode ser tratado com um then() normalmente;
- Uma função assíncrona espera a possibilidade de a palavra-chave await ser usada para invocar código assíncrono;
- `await` indica que o JavaScript deve esperar o retorno de uma promise para continuar a execução, importante usar apenas quando necessário tratar respostas de uma promise para não paralizar o fluxo, quando usado da maneira correta não altera a performance da aplicação;
-  o await só funciona dentro de funções assíncronas e é colocada na frente de qualquer função que retorne promise para pausar o código até que a promise seja resolvida, retornando o valor resultante; 
- Não precisa de funções para sincronizar os resultados;
- Outro método importante da promise é o `Promisse.all()` que recebe uma array de funções assincronas independentes entre si, evitando o uso de awaits que não sejam necessários;
- Facilita o tratamento de erros seja com menor encadeamento do .then() ou ainda com o uso de `try/catch`;

---

### Exercícios

- [Exercicio para sala](/exercicios/para-sala/)
- [Exercicio para casa](/exercicios/para-casa/)


### Links Úteis


### Videos Complementares


<p align="center">
Desenvolvido com :purple_heart:  
</p>
