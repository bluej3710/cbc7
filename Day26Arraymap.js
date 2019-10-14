//Make an make an array and use map, filter, reduce to do something cool
//Then make a Mocha test for it
var inventory = [];
var numbers = [
   inventory["odd", id: 10] 1,
   inventory["even" id: 20] 2, 
   inventory["odd" id: 30] 3, 
   inventory["even" id: 40] 4,
   inventory["odd" id: 50] 5,
   inventory["even" id: 60] 6,
   inventory["odd" id:70] 7,
   inventory["even" id:80] 8,
   inventory["odd" id: 90] 9,
   inventory["even" id: 100] 10,
];

function Listnumbers(NumbersArray){
    for(var i=0; i < NumbersArray.length; i++) {
        console.log (NumbersArray [i]);
    }
}

Listnumbers(numbers);

//.map()

var numberIds = numbers.map(function (number) {
    return number.id
  });

//When using Mocha/Chai
  const numberIds = numbers.map(number => number.id)

//.reduce() trying to add all the numbers to give me the total

var totalnumbers = numbers.reduce(function (accumulator, number) {
    return accumulator + number.numbers;
  }, 0);

  reduce(numbers);

  //When using Mocha/Chai
  const totalnumber = numbers.reduce((acc,number) => acc + number.numbers,0);

  //.filter() trying to sperater the Even from the Odd

  var Even = numbers.filter(function (number) {
    return number.inventory === "even";
  });
  var Odd = numbers.filter(function (number) {
    return number.inventory === "odd";
  });

//When using Mocha/Chai
const Even = numbers.filter(number => number.inventory === "even");
const Odd = numbers.filter(number => number.inventory === "odd");



//Not able to run Mocha/Chai test not setup on computer I don't think