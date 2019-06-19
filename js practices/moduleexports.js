
var counter = function(arr){
    return "there are " + arr.length + " elements in this string"
}

var adder = function (a,b){
    return `the sum of ${a+b}` //es6 module 

}

var pi = 3.142;


module.exports.pi = pi

module.exports.adder = adder

module.exports.counter = counter //these export specific things isntead of one element

