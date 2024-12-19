 let arr=[3,4,5,6,7,"shashank"]
 
 for(const num of arr)
 {
    //console.log(num);
 }

 const greeting="shashank srivastava"

 for(const g of greeting )
 {
     //console.log(g)      // we dont need to use classic for loop , by this way we can print or perform operation on every index
 }


 //MAPS

 const map=new Map()    // it is an object which hold key value pair,collection of key value pair and unoique

 map.set('IN',"india")
 map.set('USA',"UNITED STATE OF AMERICA")
 map.set('FR',"france")

 //console.log(map)   // it will print map


 //for using key value pair

 for(const key of map)
 {
    //console.log(key)   // it will print array of each
 }

 for(const [key,value] of map)
    {
       //console.log(key,':->',value)  // it will print IN :-> india
                                     //USA :-> UNITED STATE OF AMERICA
                                    // FR :-> france
    } // we can print onlu key or value with this

// we cant iterate obhject like this


//********************//******************* */
   // for object
const myobj={
    cpp: "c++",
    py: "python",
    rb : "ruby",

}

for(const key in myobj)
{
    //console.log(key)
} // here it will give all key

for(const key in myobj)
    {
       // console.log(`${key} AND ITS VALUE IS : ${myobj[key]}`);
    } 


    // for array

    //const programming=["js","rb","py","java","cpp"]

    //for(const key in programming){
        //console.log(programming[key])
    //} //it will print all values and key will be 0,1,2,3,4

     





   // ********************FOR EACH***************

   const programming=["js","rb","py","java","cpp"]

//    programming.forEach(function(val){  // foreach ask for call back function to perform operation and it dont require name of the function and it contain parameter which access each value of array
//     console.log(val)
//    })

programming.forEach((item)=>{
   // console.log(item)   // it will give samee result
})
 

  // or 

  function Printme(item){
   // console.log(item)
  }

  programming.forEach(Printme); // it will again give the dame result



  //we can also provide multiple parameter in for forEach

  programming.forEach((item,index,arr,value)=>{
           //console.log(item,index,arr,value)
  })



  //  object in the array

  const newarr=[
    {
        name:"shashank",
        department: "cse",
        post : "coder"
    },

    {
        name:"sidd",
        department: "cse",
        post : "developer"
    },

    {
        name:"shanu",
        department: "cse",
        post : "webdev"
    }

  ]

  newarr.forEach((item)=>{
    console.log(item.department)

  })  // foreach to access multiple array element

