const descripter = Object.getOwnPropertyDescriptor(Math, "PI")   

//console.log(descripter);    //it will show the property of math.pi  hear writable property is false therefore we cant overwrite it

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);     // it will not overwrite the value of pi

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {   // to define properties
    //writable: false,
    enumerable: true,
    
})

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {            //it will give entries of object chay
    if (typeof value !== 'function') {
        
        //console.log(`${key} : ${value}`);
    }
}