// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     roleTuple: [number, string];
//     role: string[]
// }= {
//     name: "max",
//     age : 22,
//     hobbies: ["sports", "cooking"],
//     roleTuple: [2, "author"],
//     role: ["author"]
// };

// person.role.push("admin");

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "max",
    age: 22,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ["sports", 3, true];

const product: {
    id: string;
    price: number;
    tags: string[];
    details:{
        title: string;
        description: string;
    }
} = {
    id : "abc",
    price : 12.3,
    tags: ["hello", "world"],
    details: {
        title: "Red Carpet",
        description: "A great carptet"
    }
}


console.log(person.name);
console.log(product.details);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.localeCompare());
}

if(person.role == Role.ADMIN){
    console.log("is admin")
}