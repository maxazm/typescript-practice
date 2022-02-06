function add(n1: number, n2: number): number{
    return n1 + n2;
}

function printResult(num: number): void{
    console.log("Result: " + num);
}

function exponentiation(n1: number, n2: number): number{
    return n1 ** n2;
}

function exponentiation2(n1: number, n2: number, cb: (num: number) => void): void{
    const result = n1 ** n2;
    cb(result);
}


printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
printResult(combineValues(1,2));

combineValues = exponentiation;
printResult(combineValues(2,16));

exponentiation2(2, 24, (result) => {
    console.log(result);
})