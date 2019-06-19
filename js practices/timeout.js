setTimeout(function(){
    console.log("time has passed");
}, 5000); //sets delay

setTimeout(function(){
  console.log("5 seconds")  
}, 5000); //sets delay

var time = 0

setInterval(function(){
    time++;

    console.log(time + " cycles have passed")
}, 20); //sets an interval to run on

setTimeout(function(){
    console.log(" seconds have passed")
}, 1000);

var timer= 25

setInterval(function(){
    timer+=5
    console.log(timer + Math.random() + "  scrapes-have-occured")
}, 100);

//control c stops code running

var clock = setInterval(function(){
    time++;
    console.log(time + " cycles have occured");

    if(time = 1000){
        clearInterval(time);
    }
} , 2000); //always remember to add the delay time at the end