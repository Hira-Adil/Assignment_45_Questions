import { title } from "process";

let person_name : string = "imran khan";

// lower case

console.log(person_name.toLowerCase());

// upper case 

console.log(person_name.toUpperCase());

// title case

console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1,10));