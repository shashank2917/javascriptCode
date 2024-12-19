let myheroes=["spiderman","superman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is${this.spiderman}`)
    }
};

Object.prototype.name=function(){
    console.log(`my name is shasahank`)  // here we declare object which insludes object array string all so it can be accessible in all of them
}

Array.prototype.myname=function(){
    console.log(`my name is himansh`)     //here properties are only added to the array
}

// heropower.name();
// myheroes.name();
// myheroes.myname();
//heropower.myname();  //it will through error because object cant access properties of array


        //INHERITANCE

        const User = {
            name: "chai",
            email: "chai@google.com"
        }
        
        const Teacher = {
            makeVideo: true
        }
        
        const TeachingSupport = {
            isAvailable: false
        }
        
        const TASupport = {
            makeAssignment: 'JS assignment',
            fullTime: true,
            __proto__: TeachingSupport  //IT MEANS TASUPPORT CAN ACCES THE PROPERTIES OF teaching support
        }
        
        Teacher.__proto__ = User   //teacher can accessthe properties of user
        
        // modern syntax
        Object.setPrototypeOf(TeachingSupport, Teacher)
        
        let anotherUsername = "ChaiAurCode     "
        
        String.prototype.trueLength = function(){
            console.log(`${this}`);
            console.log(`True length is: ${this.trim().length}`);
        }
        
        anotherUsername.trueLength()
        "hitesh".trueLength()
        "iceTea".trueLength()