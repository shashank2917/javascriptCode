class user{
    constructor(email,password){
        this.email=email;
        this.password=password; //_email,_password are private property and the result we give outside is manipulated data
    }

    get email(){
        return this._email.toUpperCase()   //this makes it private propery
    }//we use gett and set if dont want to send exact data or if we want to send manipulated data
    set email(value){
         this._email=value;
    }


    get password(){
        return `${this._password}sha`
    }
    set password(value){
       this._password=value
    }
}

const shashank=new user('shas@google.com','abc')

console.log(shashank.password);
