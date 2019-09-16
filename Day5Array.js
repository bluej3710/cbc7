var products = [
    "gatorade",
    "carrots",
    "cheese",
    "bread",
    "milk",
    "wine",
    "yogurt",
    "cookies",
    "eggs",
    "noodles"
];

// declaring function
// formal arguments
function ListProducts(ProductsArray){

    for (var i = 0; i < ProductsArray.length; i++) {
        console.log (ProductsArray[i]);
      }
}

// calling function
// actual arguments
ListProducts(products);

//Adding inventory count
//Goal is to add "Kiwi" Take away "Noodles or bread"
var products = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = products;

function myFunction() {
  products.push("Kiwi");
  document.getElementById("demo").innerHTML = products;
}


//Subtracting inventory count
//Ask if I need to list the array everytime before I declare a function?, Also is it possible to have multiple functions within one array? what difference between shift(begin),pop(end)?
var products = ["];
document.getElementById("demo").innerHTML = products;

function myFunction() {
  products.pop();
  document.getElementById("demo").innerHTML = products;
}

//Notify when count ===0~



