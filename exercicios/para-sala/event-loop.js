
setTimeout(() => {
   console.log("asynchronous function"); 
}, 1000);

function greet(callback) {
    console.log("micro-task");
    callback("Laura")
}

greet((nome) => console.log("Bom-dia ", nome))

console.log("1. micro task");
console.log("Hello, world");
console.log("micro task end");

