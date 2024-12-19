const user={
    username: "shashank",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`)
       // console.log(this)  // thid represent current context
    }
}

user.welcomemessage();
user.username="sam"
user.welcomemessage();

// console.log(this) // it will return empty object because we are in node environment  

//if we write fnction to check this

// function chay(){
//     let username="shashank"
//     console.log(this.username) // it will give undefined  as we cant use this in the fn
// }

// chay()


//********************arrow fn*****************

const chay=()=>{
        let username="shashank"
        console.log(this.username) 
    }

    chay()

   const addtwo= (num1,num2)=>{   // we can also write it as const addtwo=(num1,num2)=>(num1+num2) we use parrenthesis therefore we dont need to use return//because it is are of one line
    return num1+num2;
   }

   console.log(addtwo(4,7))

   // to return object

   const addthree=(num1,num2)=>({username:"shashank"})
   console.log(addthree(3,4))  // it gives object {username:`shashank`}
   