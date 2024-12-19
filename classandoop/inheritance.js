class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`usernamee is ${this.username}`)
    }
}

class teacher extends user{   //techer have property of fn user
    constructor(username,email,password){
        super(username)   //hear super automatically send current this to the fn user and get username
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`a new course was add by ${this.username}`);
    }
}

const userdetail=new teacher('shashank','shd@gmail.com',4321)
userdetail.addcourse()

console.log(userdetail instanceof user) //it will give true
console.log(userdetail instanceof teacher)
console.log(teacher instanceof user)  // it will give false

