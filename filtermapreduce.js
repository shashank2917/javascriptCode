const programming=["js","cpp","java","python"]

const values= programming.forEach((item)=>{
    //console.log(item);
    return item   //foreach doesnot return any value
})

//console.log(values);// it will return undefined 


   // FILTER 
   const myprog=[1,2,3,4,5,6,7,8,9]

//    const newval=myprog.filter((item)=>item>4)  // we need to give condition in filter
//    console.log(newval); //it will return 5,6,7,8,9

   //const newval=myprog.filter((item)=>{   //if you apply scope in fn then we need to give return to print value based on the condition outside

       // return item>4
    // })  // we need to give condition in filter
   //console.log(newval); 


   const newnums=[]

   myprog.forEach((item)=>{

       if(item>4)
       {
        newnums.push(item)
       }
   })

   //console.log(newnums)   // this is another method





   //MAP

   const mynumber=[1,2,3,4,5,6,7,8,9]

   const newnumbr=mynumber.map((num)=> {   // we can write (num)=>num+10)
    if(num>4){
        return num+10
    }
   }) // or we can write mynumber.map((num)=>{return num+10})
   //console.log(newnumbr)


   // filter automatically filter the element,map will iterate each and every element. we can apply condition check etc but it is not necessary that the element which follow condition will return back only. rest of the other element will give undefined



             //CHAINING

const source=[1,2,3,4,5,6,7,8,9]

const newsrc=source.map((item)=>item*10).map((item)=> item +10).filter((item)=>item>50)
console.log(newsrc)  // this is chaining the result pass from one condition to other 


