//Js
////Calling an element//I could of called this element by its ID if I had given it and ID
var MyH1 = document.getElementById("H1");
var myElement = document.getElementById("P2");
var mybutton1 = document.getElementById("Button1");
var mykids = document.getElementById("mykids");

 function colorchange(){
//   document.getElementById('H1').style.color = 'blue';    
MyH1.style.color = "blue";
 }

 //Calling kids
 function callingthekids(){
    //  document.getElementById("mykids").children.length;
     var lengthOfKid = mykids.children.length;
     alert(lengthOfKid);
     mykids[0].style.color="yellow";
     //console.log(lengthofKid);
 }

