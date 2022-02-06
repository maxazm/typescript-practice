// tsc app.ts -w (watch mode)
// tsc --init (load all files in the project)
// use "tsc" to update

const UserName = "max";

let age = 30;

age = 29;

// default arguments
const multiply = (n1: number, n2: number = 3) => {
    return n1 * n2;
};

// shorter ver.
const multiply_shorter = (n1: number, n2: number) => n1 * n2;

console.log(multiply(3));
console.log(multiply_shorter(4,5));

const button = document.querySelector("button")!;

button.addEventListener("click", e => console.log(e));