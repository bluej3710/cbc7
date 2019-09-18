// Declaring var
var inventory = [];

//Declaring functions
function fillArray() {
    inventory["water"] = 100,
        inventory["soda"] = 100,
        inventory["detergent"] = 50,
        inventory["apple"] = 100,
        inventory["banana"] = 100,
        inventory["tomato"] = 100,
        inventory["bread"] = 0,
        inventory["butter"] = 50,
        inventory["milk"] = 50,
        inventory["chicken"] =0;
 }
//Declaring Adding from an Item
function addvaluetoitems (item, number) {
    inventory[item] +=number;
    console.log(inventory);
}


//Declaring Subtraction from an Item
function subtractvaluetoitems (item, number) {
    inventory[item] -=number;
    console.log(inventory);
}
//Declaring when Item OutofStock Number reaches 0
function OutofStock() {
    for(var item in inventory){
        if(inventory[item] === 0){
            console.log(item + " is out of stock");
        }
    }

}

//calling functions actually using the function
fillArray();
//Adding 50 to milk
addvaluetoitems("milk",50);
// //Subtracting 100 from tomato
subtractvaluetoitems("tomato",100);
//Notifying when OutofStock Number reaches 0
OutofStock();
//Make a loop to loop thru the inventory Array so it searches thru all items after the if statement but before the console.

var assert=require("assert");
describe("addvaluetoitems", function() {
    it("function that takes 2parameters add 2parameter to the 1st", function(){
        assert.equal(addvaluetoitems("milk",50),100);
    });    
});