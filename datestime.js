//type of date is an object

 let myDate=new Date()

 console.log(myDate)
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toLocaleString())


 let date=new Date(2024,12,2,5,40,34)
console.log(date.toLocaleString());
//  let newdate=new Date("2023-01-23")
//  console.log(newdate.toLocaleString());


let mytimestamp=Date.now()

console.log(mytimestamp)

//if you need to compare from old date

console.log(date.getTime())

//you can now compare it

// if you want to get timestamp in second then devide it by 1000 and use fllor to avoid decimal value

console.log(Math.floor(mytimestamp/1000));


//you can find ddate month year hour etc by using its propertiess

let newdate=new Date()
console.log(newdate);

console.log(newdate.getDay());

// to costomize day date time etc

newdate.toLocaleString('default',{
    weekday:"long",
    timeZone: etc
    //press cntrl space to find all the properties to costomize
    //we costomize each properties in object
})