const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')  //it is are of constructor type vale assigned in key value.check it browser console 

// console.log(gameName[0]);
// console.log(gameName.__proto__);

 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString); //IT WILL GIVE VALUE IN REVERSE AND CAN TAKE NEGATIVE VALUE IN INITIALISATION TO START FRO REVERSE WHEREAS IF SUBSTRING INITIALISES FROM NEGATIVE THEN IT WILL BE START FRO 0.

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// to remove extrachar and spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));