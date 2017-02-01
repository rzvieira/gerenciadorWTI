/**
* User
*/
var User = (function () {
    function User(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
    User.prototype.hello = function () {
        return "Hello, " + this.fullName;
    };
    return User;
})();

var user = new User("Ane Caroline", "Mossato");
document.body.innerHTML = user.hello();
