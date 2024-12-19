
const mysym=Symbol("key1")

const jsuser={
    name: "shashank",  //by default name is string...as it is declared behind the:
    location: "jaipur",
    "email" : "ssrivastava2917@gmail.com",
    isloggedin: true,
    lastlogindays: ["Monday","friday"],
    //mysym: "mykey1" 
    [mysym]: "mykey1"
}

console.log(jsuser.email)
console.log(jsuser["email"])

// we can also write email as "email" as a string
 console.log(jsuser.email)

 //SYMBOL AS A KEY

console.log(jsuser[mysym]) //we cant find symbol by dot notation
console.log(typeof jsuser.mysym) // it will gige string because we dont declare mysym as a symbol in the jsuser object. when you print object then symbol will be written in the object  

// if you want to stop the changes then use object.freeze(nameofobject). after using this no changes will propagate further
jsuser.email="himan56@google.com"
// Object.freeze(jsuser)
jsuser.email="siddharth34@google.com"  // it will not propagate due to freeze

console.log(jsuser)



  // using function in the object

  jsuser.greeting=function(){
    console.log(`hii shashank this is your email: ${this.email}`)  //this keyword is usedd to represent same objecct
  }

   console.log(jsuser.greeting());


 //  **************************object 2**************************

 //singleton object by using constructor

 //const tinderuser=new objecct() // it will give empty obj {}.it is singleton obj
 const tinderuser={} //it id not singelton object

 tinderuser.id="abc"
 tinderuser.name="sam"
 tinderuser.islogin="true"

 console.log(tinderuser) // it will also give emmpty object



 const regularuser={
    email:"shfhgio.com",
    fullname:{
        userfullname:{         //object inside object
            firstname:"shashu",
            lastname:"sri"
        }

    }
 }

 console.log(regularuser.fullname.userfullname.lastname) //it will give sri
 console.log(regularuser)


 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
 //const obj3={obj1,obj2}
           //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

 //Object.assign(obj1,obj2) //in the result all the value will move in obj1 . 
 //console.log(obj1) //it will give { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3=Object.assign({},obj1,obj2) // all value will mode in {}.

console.log(obj3)

            //or

const obj4={...obj1,...obj2};
console.log(obj4)   //spread operator


         // ARRAY OBJECT

const me=[
    {
        id:1,
        email:"ssh@.com"
    },
    {
        id:1,
        email:"ssh@.com"
    },
    {
        id:2,
        email:"ssjkdhsfh@.com"
    },
    {
        id:3,
        email:"sskdn@.com"
    }
]
console.log(me[1].email)  // It will give ssh@.com

console.log(tinderuser)
console.log(Object.keys(tinderuser))    // It will give all keys
console.log(Object.values(tinderuser))  //  it will give all values
console.log(Object.entries(tinderuser))  // It will give all entries




//************* obj3***********************

     //SYNTACTICAL SUGAR

     const course={
       coursename: "Js in hindi",
       price: 999,
       instructor: "hitesh"
     }
 
     //if you want to access course instructor multiple times then you need to do course.instructor but instead of this you can do---

     const {instructor: inst}=course

     // now you only write inst to access it 

     console.log(inst);

