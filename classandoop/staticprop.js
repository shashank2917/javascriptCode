class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username: ${this.username}`)

    }

   static createid(){  //static use ham islie karte hai because ham iska access har uss object ko nhi dena chahte hai jo iss class se instanciate hua hai
        return `123`
    }
}

const shashank=new user('shashank')
console.log(shashank.createid()) //it will not got access ofthe create id


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const subteacher=new teacher("iphone","shfdu@.com")
console.log(subteacher.createid()); // it will not got access to the create id

