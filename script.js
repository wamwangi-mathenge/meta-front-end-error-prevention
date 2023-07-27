// Task 1: Code a function declaration named addTwoNums which accepts a and b and console logs a + b
// function addTwoNums(a, b) {
//     console.log(a + b);
// }

// Task 2: Invoke the addTwoNums function with a number and a string
// addTwoNums(5, "5")

// Task 3: Update the addTwoNums function with a try...catch block
// function addTwoNums(a, b) {
//     try {
//         console.log(a + b)
//     } catch(err) {
//         console.log(err)
//         console.log("The program continues running")
//     }
// }

// addTwoNums(5, "5")

// Task 4: If the passed-in arguments are not numbers, throw an error
function addTwoNums(a, b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError("the first argument is not a number")
        } else if(typeof(b) != 'number') {
            throw new ReferenceError("the second argument is not a number")
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error", err)
    }
}

addTwoNums("5", 5)
console.log("It still works.")