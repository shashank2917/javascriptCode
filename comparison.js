
let score="33"
let anotherNumber=Number(score);
// console.log(typeof anotherNumber);
// console.log(anotherNumber);


// if we type 33abc

let score1="33abc";
let anotherNumber1=Number(score1);
// console.log(typeof anotherNumber1);
// console.log(anotherNumber1);

               //NOTES
// if we write null in score then it gives reslt of type number and value of anothernumber will be 0.
//null default type is object
// if we use true or false then it default type will be boolean and give result in value in number will be 1 or 0.
          
          //CONVERSION

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let loggedin=1
let typeofloggin=Boolean(loggedin);
// console.log(typeofloggin);  // IT WILL return true



let islogin=""
let typeoflogin=Boolean(islogin);
// console.log(typeoflogin);  // IT WILL RETRN FALSE

//if we use any string(e.g. "shashank" in place of "" then it will return true because it contains any value in it)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true



//**********************operation************************* */


let value = 3
let negValue = -value
// console.log(negValue); IT GIVES -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //IT GIVES 2 TO THE POWER 3
// console.log(2/3);
// console.log(2%3); // IT GIVES 2 IS DEVIDED BY 3 AND THE REMAINDER WILL BE THE RESULT

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // IT WILL ADD BOTH STRING

// console.log("1" + 2); GIVES 12
// console.log(1 + "2");  gives 12
 //console.log("1" + 2 + 2); //GIVES 122
// console.log(1 + 2 + "2");  GIVES 32
// console.log("1"+(2+2)); //gives 14

console.log(+true); //gives result 1
console.log(+"");// writing pls leads to conversion //GIVES RESULT 0



// console.log(2 > 1);  //FALSE
// console.log(2 >= 1);  //TRUE
// console.log(2 < 1);   //FALSE
// console.log(2 == 1);  //FALSE
// console.log(2 != 1);  //FALSE


// console.log("2" > "1");
// console.log("02" > 1);

//console.log("hi"=="hi")   //gives true.
//console.log("-0"== "0")   // gives false because it compares string.
// console.log(-0 == 0)
// console.log(-0=== 0)
// console.log(-0 == "0")
// console.log(-0=== "0")


// console.log(null > 0);
// console.log(null == 0);            //undefined is a variable value, for variables that have not been initialized. null, on the other hand, is an empty object value, and should not be mixed with numbers. null should not be combined with numbers, so null should not have to behave like numbers. – 

// console.log(null >= 0);
// console.log(null==undefined);      //gives true check comparison in mdn


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
