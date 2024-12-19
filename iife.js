  //IIFE

//   function chay(){
//     console.log(`DB connected`)
//   }
//   chay()   // some time function is polluted due to global scope ...to avoid this and imidiatly invoke the function we use ---

  (function chay(){
    console.log(`DB connected`)
  })();  // global scope ke polution se problem hoti hai kai bar too uss polution se bachne ke lie ham iife ka use karte hai

  (()=>{
    console.log(`db connected`);
  })(); //we use ; because javascript dont know where to stop imidiatly invoked fn ,; define the stopage of imidiatly inviked fn


  ((name)=>{
    console.log(`db connected ${name}`);
  })('shashank');   //see it as a fn we pass shashank as a argument like 


  