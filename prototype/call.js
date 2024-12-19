function setusername(username){
    this.username=username;   //ye agr apna this use karega to actually me gyb ho jaega after running
    console.log('called')       //[Removing execution context will cause all declared variables to disappear
    //To keep a reference of the execution context, use the "CALL" Method]
}

function createuser(username,email,password){
    setusername.call(this,username)    //when it calls then the fn username called and its exicutioncontest got removed after run therefore all variable got removed. to hold the reference we use .call   
    this.email=email
    this.password=password
}

const detail=new createuser('shashank','sshf@gmail.com',54321)

console.log(detail);   