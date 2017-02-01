/**
 * Pessoa
 */
class Pessoa {

    private _password: string;

    get password():string{
        return this._password;
    }
    set password(p : string) {
        if(p != "123456") {
            this._password = p;
        }
        else {
            alert("Ei senha não pode ser 123456");
        }
    }
}

var p = new Pessoa();
p.password = "123456"; //exibe erro

/**
 * Para classes com accessors precisa rodar o tsc via terminal.
 */
