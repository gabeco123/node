var pierre = function(arr){

    return "Yo Pierre " + arr + " Here"
}


var carti = function(a,b){

    return ` The best rapper in the world is ${a+b}`
}


module.exports.Playboi = "Flatbed-Freestyle" //cuts out code, now we can export in place of vars

var Gabe = "Gabe.co"

var Playboi = "Flatbed-Freestyle";


var pi = 3.1415


// module.exports.pierre = pierre
 
// module.exports.carti = carti

// module.exports.pi = pi

module.exports = {

    Gabe: Gabe,

    pierre: pierre,

    pi: pi,

    Playboi : Playboi,

    carti: carti

} //cuts out even more by listing exports in an array

/* here we learn how to export different ways, the classic 

module.exports."element" = "element"; works, the module.exports."element" = "string"

works and setting the module.exports = {element: element;} to an array works