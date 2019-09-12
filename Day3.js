var counter = 2;

counter = counter+5; 
console.log(counter);
//7
counter = counter*7;
console.log(counter);
//49 
counter = counter % 3; 
console.log(counter);
//1 
counter = counter % 2; 
//I think the return will be 2 14 4*3=12 left over will be 2
console.log(counter);
//0
 
//I think the return will be 1 14 7*2=14 left over will be 1

//prob 2

var test = 107;

if(test % 2 == 0){
    console.log(test % 2 == 0); 
} else{
    console.log("not even");
}

//prob 4
var money=true;
var loan=false;
if (money || loan){
    console.log("Win a car");
}

if (money&&loan){
    console.log("Have a car")
}

if (money){

}

if (loan){

}

if (car){

}

//Day 4 Math Ex
function checkIt(){
    var randoNum = Math.floor((Math.random() * 6));
    document.getElementById("output").innerHTML = randoNum;
    var input = document.getElementById("input").value;
    if(input == randoNum){
       document.getElementById("output").innerHTML += "Correct!";
       }else{
       document.getElementById("output").innerHTML += "Wrong!";
    }
  }