var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Animal
*/
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (typeof meters === "undefined") { meters = 0; }
        alert(this.name + " moved " + meters + "m. ");
    };
    return Animal;
})();

/**
* Snake
*/
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (typeof meters === "undefined") { meters = 5; }
        alert("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);

/**
* Horse
*/
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (typeof meters === "undefined") { meters = 15; }
        alert("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);

var sam = new Snake("Sammy the Python");
var horse = new Horse("Tommy the Palomino");

sam.move();
horse.move(34);
