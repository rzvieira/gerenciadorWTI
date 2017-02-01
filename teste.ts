/**
 * Animal
 */
class Animal {
    name:string;
    constructor(theName:string) {
        this.name = theName;
    }
    move(meters:number = 0){
        alert(this.name + " moved " + meters + "m. ");
    }
}

/**
 * Snake
 */
class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }
    move(meters = 5) {
        alert("Slithering...");
        super.move(meters);
    }
}

/**
 * Horse
 */
class Horse extends Animal{
    constructor(name:string) {
        super(name);
    }
    move(meters = 15){
        alert("Galloping...");
        super.move(meters);
    }
}

var sam = new Snake("Sammy the Python");
var horse : Animal = new Horse("Tommy the Palomino"); //posso definir o tipo com a classe pai

sam.move();
horse.move(34);