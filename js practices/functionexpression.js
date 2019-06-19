
var colors= require('colors');

function sayHi(){
    console.log("Hello".green)
} 
    //normal function

sayHi();//calling the function previously declared

console.log(__dirname);
console.log(__filename);

var sayBye = function(){
    console.log("bye")

} //global function

sayBye(); //calls upon function


function sayHi(){
    sayHi();

} //calls a function within a function


function goodDay(){
    goodDay();

} //same thing

