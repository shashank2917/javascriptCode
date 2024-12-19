const myArr=[1,2,3,"shashank",true]
//array in js stores collection of multipleitems of different datatype

//DEEPcopy= deepcopy of an object is a copy whose property do not share the same reference point 

const myarr2=new Array(1,2,3,4)


// Array methods

myArr.push(6)
//console.log(myArr)

myArr.unshift(9);  // to push value in starting place
//console.log(myArr)

myArr.pop();

//console.log(myArr.includes(9)) //it print true or false
//console.log(myArr.indexOf(3))

const newArr=myArr.join() // it will convert array element int string

//console.log(typeof newArr) // it will print string


//slice , splice
      //slice
console.log("A",myArr);
const myn1=myArr.slice(1,3);// it dont includes last range
console.log(myn1)
console.log("A",myArr); // it dont manipulate orignal array

      //splice
console.log("B",myArr);
const myn2=myArr.splice(1,3); //it include last range
console.log(myn2)
console.log("B",myArr); //splice remove the element given in the splice range from the orignal array and it manipulate orignal array

//************************array part 2 *************/


//check array methods from the console

const marvelHeroes=["thor","Ironman","Spiderman"]
const dcHeroes=["superman","flash","batman"]
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)    //array tooks another array as a data.
const allHeroes=marvelHeroes.concat(dcHeroes);
console.log(allHeroes)   // we store both in a single array


//we can use spread operator

const allnew=[...marvelHeroes,...dcHeroes]
console.log(allnew); 





//array inside array


const anoarray=[1,2,3,[4,5,6],[6,7,[4,5]]]
const realanoarray=anoarray.flat(Infinity)
console.log(realanoarray)  //infinity show the depth to merge all insided array 


console.log(Array.from("shashank")) // it will make array of the given arguement 

// if it is not able to make array then it will give blank array

console.log(Array.from({name:"shashank"})) // it gives empty array
 // we need to provide keys or values for the object type array

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3))  // it will give array by combaning all the object

 

