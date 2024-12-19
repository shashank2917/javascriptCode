function createuser(username,score){
    this.username=username;
    this.score=score;
};

createuser.prototype.scoreincrement=function(){
    this.score++;
};
createuser.prototype.printme=function(){
    console.log(`score is${this.score}`)
};

//const product1=createuser('shashank',100)  // by this expresion prototype will be created with memory space see image pdf
//const product2=createuser('hitesh',100)   //see images therefore we use new keyword

const product1=new createuser('shashank',100)  // by this expresion prototype will be created with memory space see image pdf
const product2=new createuser('hitesh',100)


product1.printme()


//NOTES

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/