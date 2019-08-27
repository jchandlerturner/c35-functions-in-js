// console.log("logic js for functions and such");

// const firstName = "Chandler"
// const lastName = "Turner"

// function fullName() {
//     const myName = `${firstName} ${lastName}`;
//     console.log("My name is", myName);
// }

// fullName();

// const crayonColors = ["Red", "Green", "Blue"];
// const fullbox = 4;

// function addColor(newColor){
//     crayonColors.push(newColor);
//     return crayonColors.length;
// }

// let crayonBoxNumber = addColor("Mulberry");
// if (crayonBoxNumber < fullbox){
//     console.log("pick more colors");
// }else{
//     console.log("your box is full");
// }
//--------------------------------------------------------------
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.


for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        console.log(currentNumber, "chicken") // Only 2, 4, 6 will appear
    }
    if (currentNumber % 7 === 0) {
        console.log(currentNumber, "monkey")
    }
    if (currentNumber % 35 === 0) {
        console.log(currentNumber, "chickenmonkey")
    }
}

//-----------------------------------------------------------------
//A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

//Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1
                            //argument//
const takeNumber = function (bandName) {
    let sentence = `${bandNumber}. ${bandName} `
    bandNumber++//increment by 1//
    return sentence

}
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


//-----------------------------------------------------------------

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < foods.length; i++){
    grill(foods[i]);
}

console.log(cookedFood)