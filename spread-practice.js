// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    // Your code here
    for (const arg of args) {
        console.log(arg)
    }

}
unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");