var colors = require("colors/safe"); //npm colors


var counter = 1;

setInterval(function(){

    counter+=2

    console.log(colors.green(counter + Math.random() + " Nap-Scrape"))
    
}, 100);

module.exports = counter