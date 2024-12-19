//var c = 300 // global scope
let a = 300
if (true) {   //local scope/block scope
    let a = 10
    const b = 20
    var c=30
    // console.log("INNER: ", a); //irt will give result as a=10
    
}



// console.log(a);  // it will give error of "a is not available"
// console.log(b);   // 
// console.log(c);  // it will give reslt 30 that means we can access it outside the block scope



//**********************fn2**************************
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // it can access username eg chote bachhe bade bacchhe se icecream maag skte hai
    }
    // console.log(website);  // we cant access it ,its scope ends ,dueto line by line execution next line will not be executed

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  // child fn only can access parent fn
    }
    // console.log(website); // we cant access because its scope is ended
}

// console.log(username);  // similarly it is also not executed


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // it will give result 6

function addone(num){
    return num + 1
}



console.log(addTwo(5))  // it eill not print 
const addTwo = function(num){   // it is also expression
    return num + 2
}