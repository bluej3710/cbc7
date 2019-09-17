 //Morgan Ex in class follow format
 //value accessing
console.log(myObject.myProperty);

//for key in object
for (var key in myObject) {
    // skip loop if the property is from prototype
    if (!myObject.hasOwnProperty(key)) continue;

    var obj = myObject[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        // your code
        //alert(prop + " = " + obj[prop]);
    }
}

var car = {
    door: 2,
    lights: 4,
    mirrors: 3,
    tires: 5,
    windows: 7,
    hassunRoof: true,
    runs: "vroom",
 
    typeoftransportation:function(){
 
    }
 }
 console.log(car.windows);
 //key object
 for(var key in car) {
 
    if (!car.typeoftransportation(key)) continue;
 
    var obj = car[key];
    for(var prop in obj){
        if (!obj.car(prop)) continue;
        alert(prop + "=" + obj[prop]);
    }
 }