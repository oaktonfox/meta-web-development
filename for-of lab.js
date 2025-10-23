// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(dairy) {
    for (let d of dairy) {
        console.log(d)
    }
}

logDairy(dairy)
// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
const animal = {  
    canJump: true  
};  

const bird = Object.create(animal);  
bird.canFly = true;  
bird.hasFeathers = true;

function birdCan() {
    for (let [key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`)
    }
}

birdCan()
// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones

function animalCan(bird) {
    for (let row in bird) {
        let value = bird[row];
        console.log(`${row}: ${value}`)
    }
}

animalCan(bird)


// Final submission has all declarations in the function to pass the tests
// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
/*
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (const d of dairy) {
        console.log(d);
    }
}

logDairy();

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties


function birdCan() {
    const animal = {  
    canJump: true  
    };  

    const bird = Object.create(animal);  
    bird.canFly = true;  
    bird.hasFeathers = true;
    for (let [key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`)
    }
}

birdCan()
// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones

function animalCan() {

    const animal = {  
    canJump: true  
    };  

    const bird = Object.create(animal);  
    bird.canFly = true;  
    bird.hasFeathers = true;

    for (let row in bird) {
        let value = bird[row];
        console.log(`${row}: ${value}`)
    }
}

animalCan()
*/