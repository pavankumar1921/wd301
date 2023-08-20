interface User {
    name:string;
    id:number;
    isAdmin:boolean; //isAdmin? makes it optional
}

let newUser : User = {
    name: "Pavan",
    id:6,
    isAdmin : false

}
let aaU : User ={
    name:"some",
    id:4,
    isAdmin:true
}
let aaUU : User = {
    ...aaU,//using spread operator copies or merges two objects
}
console.log("aaUU",aaUU)
type stringArray = string[]
let partialUser: Partial<User> = {}; // All properties are optional
partialUser.name = "Pavan";
partialUser.id = 6;
console.log(partialUser)
console.log(newUser.name)
console.log(2);