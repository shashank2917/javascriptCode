const promises=new Promise(function(resolve,reject){
    //console.log("task is completed")
    resolve();
})

promises.then(function(){               //here we create a promise and the result or data is passed as a arguement in the function of the promisses.then
   // console.log('promise consumed')     // then is connected to resolve and we need to connect both ,and therefore we write resolve(),we can also pass data as a arguement from resolve to the function of then for further execution

})



//WE CAN ALSOO WRITE THIS LIKE

new Promise(function(resolve,reject){
    console.log("task is completed")
    resolve();
}).then(function(){               //here we create a promise and the result or data is passed as a arguement in the function of the promisses.then
    console.log('promise consumed')     // then is connected to resolve and we need to connect both ,and therefore we write resolve(),we can also pass data as a arguement from resolve to the function of then for further execution

})


new Promise(function(resolve,reject){
    resolve({name:"shashank",dob:29,course:"javascript"});
}).then(function(message){                        // here data is passed through resolve
    console.log(message)     
})

//using settimeout

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"shashank",dob:29,course:"javascript"});
    },1000)
    
}).then(function(message){                        // here data is passed through resolve
    console.log(message)     
})


//EXAMPLE 4

const prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"shashank",email:"sssf@.gmail.com",pass:"54321"}) //it pass data as a arguement in the then fn
    },1000)
}).then(function(user){            //it return user.name to the other fn in the then fn 
    
        return user.name
  
   
}).then(function(username){
    console.log(username)        // it print data
})



//Using try catch method

const promp=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error)
        {
            resolve({name:"shashank",email:"sssf@.gmail.com",pass:"54321"})
        }
        else{
            reject('error: something went wrong')
        }
    },1000)
}).then(function(user){            //it return user.name to the other fn in the then fn 
        return user.name
}).then(function(username){
    console.log(username)        // it print data
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('promise is either resolved orr rejected')
})




// TRY CATCH METHOD

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumepromisefive() {
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive()                  //you hsve to call the fn here


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')    //fetch will access and fetch the data of the api and pass it to the function of then
.then((response) => {
    return response.json()          //it convert data into json and return to the next then fn
})                                  //If there is some error then it will pass error into catch
.then((data) => {
    console.log(data);                   
})
.catch((error) => console.log(error))    // it will print error

