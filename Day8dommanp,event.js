//Example Dom Manipulation, Eventlisteners
//Ex HTML
(script)
<body>
 <h1>Main</h1>
 <p>some content</p>
 <ol>
   <li>first</li>
   <li>second</li>
   <li>third</li>
 </ol>
</body>

//My HTML
<body>
 <h1>id ="Main">Main </h1>
 <button onclick="Go()">Go!</button>
 <p>Example of Dom Manipulation and adding an Eventlistener</p>
 <ol>
   <li>first</li>
   <li>second</li>
   <li>third</li>
 </ol>
</body>
(/script)
document.getElementById(Main)
//classes or tags

//create an element
var btn = document.createElement("BUTTON");  
// Create a <button> element
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn); 

/*
style
innerHTML vs textContent
classList
*/

document.getElementById("Main").style.color = "blue";

//Adding Event
//element.addEventListener(event, function, useCapture);
document.getElementById("hello").addEventListener("click", function(){ alert("Hello World!"); });
// on for calling spec events on an action i.e. on click
function go(){
  document.getElementById("hello").innerHTML = "Finally Got It!";
}

//HTML
<h1 id ="hello">hello<h1>
  <button onclick="go()">go!</button>