/**
* Pessoa
*/
var Pessoa = (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (p) {
            if (p != "123456") {
                this._password = p;
            } else {
                alert("Ei senha não pode ser 123456");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
})();

var p = new Pessoa();
p.password = "123456"; //exibe erro
