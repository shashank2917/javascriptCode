const score=400

const num=new Number(100)
// console.log(num)  //Here we explicitly define datatype (number) it will give result [Number:100]

// console.log(num.toString()); 

// console.log(num.toFixed(2)); //it will give result 100.00


const newnum=345.789
//console.log(newnum.toPrecision(2))  //it means you have to focus on only first two number and apply precision on other number

//priority is given to the value declared in the toprecision 

const money=1000000

//console.log(money.toLocaleString()); //It will give result in US standard 10,00,000
//to convert it in indian we need to do

//  console.log(money.toLocaleString('en-IN'));


// go in console and write console.log(Math).  it will give all property.

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)