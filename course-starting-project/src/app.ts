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

console.log(multiply(7));
console.log(multiply_shorter(4,5));

const button = document.querySelector("button")!;

button.addEventListener("click", e => console.log(e));

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const person2 = {
    firstName1: "max",
    age30: 30
}

const copiedPerson = { ...person2 };

console.log(copiedPerson);
console.log(person2);

const add3 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add3(5, 10, 21, 235, 21.21);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {firstName1: userName1, age30} = person2;
console.log(userName1, age30);