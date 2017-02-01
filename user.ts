/**
 * User
 */
class User {
    
    fullName:string; 
    
    constructor(firstName:string, lastName:string) {
        this.fullName = firstName + " " + lastName;
    }

    hello():string{
        return "Hello, " + this.fullName;
    }
}

var user = new User("Ane Caroline", "Mossato");
document.body.innerHTML = user.hello();