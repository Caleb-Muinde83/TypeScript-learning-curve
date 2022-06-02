//function log(message) {
//    console.log(message);
//}

//var message = 'Hello World';

//log(message);

//Specific features of typescript that we dont have in javascript
//Variable diclarationd
//var number = 1;
//let count = 2;

//function doSomething() {
//    for (var i = 0; i < 5; i++){
//        console.log(i);
//    }

//    console.log('Finally: ' + i);
//}

//doSomething();

//Code should be same in ts and js to get warnings during the compilation step
//let count = 5;
//count = 'a'; //Unlike js a variable can not be reassigned

//Declare a variable without initializing it
//let a;
//a = 1;
//a = true;
//a = 'a';

//use type annotations
//let a: number;
//a = 1;
//a = true;
//a = 'a';

//variable types in ts
//let a: number;
//let b: boolean;
//let c: string;
//let d: any;
//let e: number[] = [1,2,3];
//let f: any[] = [1, true, 'a', false];

//enum
//in plain old or vanilla js down
//const ColorRed = 0;
//const ColorGreen = 1;
//const ColorBlue = 2;

//In typescript we can declare the above like this
//enum Color {Red = 0, Green= 1, Blue = 2, Purple = 3};
//let backgroundColor = Color.Red;

//Concept of type assertions
//let message;
//message = 'abc';
//let endsWithC = (<string>message).endsWith('c');//assertion through prefixing the variable with angle barackets
//let alternativeWay = (message as string).endsWith('c'); //Assertion using message as string

//Concept of arrow fucntions
//In js
//let log = function(message) {
//   console.log(message);
//}

//Arrow function
//let doLog = (message) => {
//    console.log(message);
//}

//If our funtion has only one line we can even make it shorter
//let doLog = (message) => console.log(message); //If you have one parameter you can even exclude the parentheses which makes the cord less readable 
//If you do not have any parameters
//let doLog = () => console.log();
// 

//How to use custom types in ts
//dont worry about the drawing algorithm
//Avoid functions with too many parameters...think of a car...you dont want to pass too many parameters on the function drive car
//Encapsulate them inside an object and only pass that one object as the parameter on the drawpoint funtion
//interface  Point { //defining the shape of an object
//    x:number,
//    y:number
//}

//Original problem
//let drawPoint = (point) => {
    //..
//}

//drawPoint({
    //name: 'Caleb' //Person object that has the name property
    //Function drawpoint point is expecting a x, y point property
//    x:1,
//    y: 2
///})
//1 way: inline anotation below to fix above 
//let drawPoint = (point: { x: number, y:number}) => {
    // ...
//}

//Object simplified above line 101
//let drawPoint = (point: Point) => {
     //...Drawing algorithfm
//}

//drawPoint({
//    x: 1,
//    y: 2
//})

//Cohesion principal
//class Point {//This point is a class
//    x: number;//fields for storing data
//    y: number;

//    draw() {//Methods: Actual implimentation of this class draw funtion  
        //...
//        console.log('x: ' + this.x + 'y: ' + this.y);
//    }

//    getDistance(another: Point) {//Method
        //...

//    }
//}

//How to call an object and call a method
//let point: Point = new Point();//When defining an object of custom type we need to explicitly allocate memory to it
//This point is an object which is an instance of a class
//Human -> class...instances of human caleb, cavin
//let point = new Point();//Simplified above
//point.x = 1;
//point.y = 2;
//point.draw();

//Error after compiling
//C:\Users\muind\ts-hello\main.js:109
//point.draw();
//      ^

//TypeError: Cannot read properties of undefined (reading 'draw')
//    at Object.<anonymous> (C:\Users\muind\ts-hello\main.js:109:7)
//←[90m    at Module._compile (node:internal/modules/cjs/loader:1105:14)←[39m
//←[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)←[39m
//←[90m    at Module.load (node:internal/modules/cjs/loader:981:32)←[39m
//←[90m    at Module._load (node:internal/modules/cjs/loader:827:12)←[39m
//←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)←[39m
//←[90m    at node:internal/main/run_main_module:17:47←[39m

//Node.js v18.2.0
//PS C:\Users\muind\ts-hello>



//Constructors: a method that is called when we create an instance of that class

//class Point { //define point calss
//    x: number;
//    y: number;

    //Method
//    constructor(x?: number ,y?:number) {//? --make the parameter optional
//        this.x = x; //initialze fields
//        this.y = y;
//    }

//    draw() {  
        //...
//        console.log('x: ' + this.x + 'y: ' + this.y);
//    }
//}

//let point = new Point() //define point object
//let point = new Point(1,2)
//point.x = 1;
//point.y = 2;
//...
//...
//point.draw();

//if we introduce the rule...When we initialize our point object we do not want to change the value of X and Y
//this makes the feature more predictable
//Reduces the chance for bugs

//Access modifiers :key word that we can apply to a member of a class to control its access form the outside
//By default all members are public
//To control access to certain members of a class from the ouside filed. you can apply this on filds, properties and methods
//class Point { //define point calss
//    private x: number;//member of class -->fileds
//    private y: number;//Private acess modifier to stop it from being public

    //Method
//    constructor(x?: number ,y?:number) {//? --make the parameter optional
//        this.x = x; //initialze fields
//        this.y = y;
//    }

    //method here is public by default you don't have to repeat
    //Use privete access modifiers only when you need to...to keep the code clean
    //public draw() {  //member of class -->method
//    draw() {  
        //...
//        console.log('x: ' + this.x + 'y: ' + this.y);
//    }
//}

//let point = new Point(1,2)
//point. //delete fullstop to see
////point.x = 3;
//point.draw();


//Cool typescript feature for the above
//class Point {
//    constructor(private x?: number, private y?:number) {
//    }

//    draw() {
//        console.log('x: ' + this.x + 'y: ' + this.y)
//    }
//}

//let point = new Point(1,2);
//point.draw();


//Properties netx code block
//There is no way for us to read the cordinates and display them to the user
//class Point {
//    constructor(private x?: number, private y?:number) {
//    }

//    draw() {
//        console.log('x: ' + this.x + 'y: ' + this.y)
//    }

//    getX() {
//        return this.x;
//    }

    //scenario:  give the user to the ability to not only set the initial coordinates but also be able to change this coordinates later only if they provide a value within a given range
//    setX(value) {
//        if (value <0)
//            throw new Error('Value cannot be less than 0')
//       this.x = value;//otherwise set this new value
//    }
//}

//let point = new Point(1,2);
//let x = point.getX();//Get the value x and display it to the user
//point.setX(10);//change value of the x field
//point.draw();

//property: if you have private fields that you wanna give 
//maybe a read only access to the outside or // if you want to 
//give the consumer of your clasees the ability to set the 
//values but you want to have some basic validation
class Point {
    constructor(private _x?: number, private _y?:number) {
        //Camel casing notation: used to name fields in js & ts
        //first letter of the first world is lower case and the first letter of every word after is uppercase
    }

    draw() {
        console.log('X: ' + this._x + 'Y: ' + this._y)
    }

    get x() {//property
        return this._x;
    }
    //we can use there properties as fields

    //comment out setter to give only the read only access to this underlying field youll get an error at line 286
    set x(value) {//property
        if (value <0)
            throw new Error('Value cannot be less than 0')
       this._x = value;//otherwise set this new value
    }
}

let point = new Point(1,2);
let x = point.x;//we can work with this x property exactly the same way we use the X field //Get the value x and display it to the user
//lesson: a property looks like a filed form the outside but internally its really a method in the class
//More accurately: its either one method which is a getter or a setter or a combination of a setter and a getter
point.x = 10;//change value of the x field
point.draw();


//MODULES