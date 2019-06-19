
var colors= require('colors'); //requires colors

function sayHi(){
    console.log("Hello".green)
} 
    //normal function

sayHi(); //calling the function previously declared

console.log(__dirname);
console.log(__filename);

var sayBye = function(){
    console.log("bye") //fires sayBye function (undefined function)

} //global function

sayBye(); //calls upon function


 function sayHi(){
    sayHi();

}  //calls a function within a function


sayHi(sayBye); 