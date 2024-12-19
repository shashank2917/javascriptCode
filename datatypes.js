//THERE ARE TWO TYPES OF DATATYPES FIRST IS PREMITIVE AND SECOND IS NON PRIMITIVE

//PRIMITIVE  -7 TYPES : STRING,NUMBER,BIGINT,NULL,UNDEFINED,BOOLIAN,SYMBOL


//REFERENCE(NON PRIMITIVE)
//ARAY,OBJECT AND FUNCTION

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); it will return false because symbol stores unique value no atter you pass same value.return value will not be same


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//datatype of null is object,object->object,
//every other datatype is same as their name
//function->fnction object


    //NOTES
     
    //JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.