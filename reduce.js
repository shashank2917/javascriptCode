const newar=[1,2,3,4,5,6,7,8,9]

const red=newar.reduce(function(acc,curval){ // we need to pass accumulator and current value . acc takes its initialn value as initialisition value
    //console.log(acc,curval)
    return acc+curval

},0)  // ,0 is initialisation 

//console.log(red)

const reduce=newar.reduce((acc,curval)=>acc+curval ,0)
//console.log(reduce);  // it works same . we use hear arrow fn


//examplw

const myobj=[
    {
        course:"java course",
        price:500
    },
    {
        course:"py course",
        price:1000
    },
    {
        course:"cpp course",
        price:999
    },
    {
        course:"webdev course",
        price:5000
    },
]

const totpr=myobj.reduce((acc,item)=>acc+item.price,0)

console.log(totpr) // it will add all value of price in array


