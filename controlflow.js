//All conditional loops

let val1;
val1= 10 ?? 20;
console.log(val1)

// sometime when you use database then server return null ...to avoid error we use this operator

let val2= null ?? 20;
console.log(val2); // it will return 20

// similarly it works for undefined as well



// TERNIARY OPERATOR

//CONDITION ? TRUE : false

 const price=100;

price<80 ? console.log("price is less than 80") : console.log("price is more than 80")