// let a = 10;
// let b = 20;
// console.log(a + b);
// const name = new String("Utkarsh");
// document.getElementById("result").innerText = `Result : ${a + b}`;
// console.log(name.charAt(0));
// console.log(name.toUpperCase());
// console.log(name.indexOf("tka"));
// console.log(name.substring(4));//

// let email = "user@gmail.com";
// let domain = email.slice(4);
// let domain2 = email.substring(4);


// console.log(domain);
// console.log(domain2);

// console.log(domain.length);

// let text = "Hello World";

// console.log(text.slice(7, 2));      // ""
// console.log(text.slice(2, 7));      // ""
// console.log(text.substring(7, 1));  // llo W
// console.log(text.substring(1, 7));  // llo W

// const str = `    hello alpha    ${a + b}   `;
// console.log(`not trim : ${str}`);
// console.log(str.trim());// there are trimStart() and trimEnd() also

// console.log("Loops\nfor\nwhile\nforEach");

// let sum = 0;
// for (let i = 1; i < 101; i++) {
//     sum = sum + i;
// }
// console.log(sum);


// let naam = "Utkarsh";

// function score(...scores) {
//     console.log(scores);
//     let total = 0;
//     scores.forEach(
//         function (scores) {
//             total = total + scores;
//         }
//     )
//     return total;
// }

// console.log(score(10, 20, 30, 60));


// function abcd(val) {
//     val();
// }
// abcd(function () {
//     console.log("hey");
// });

// fat arrow function
// const square = num => num * num;

// console.log(square(5));

// expression function
// const sq = function (sq) {
//     return sq * sq;
// } 

// console.log(sq(5));

// declaration function
// function abc(s) {
//     return s * s;
// }
// console.log(abc(5));

// function abc(){
// }
// let def=function(){
// }
// let ghi=()=>{
// };

// let a = function(m){
//     return m+m
// }
// console.log(a(5));

// function outer() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();

// counter();
// counter();
// counter();

// function discountCalculator(discount) {
//     return function (price) {
//         return price - price * (discount / 100);
//     };
// }

// let discounter = discountCalculator(30);

// console.log(discounter(100).toFixed(2));

// slice and splice in array

// we use map when we have to make new array on the basis of old array

// reduce, filter, find , map , slice , splice , reverse , every , some , sort , forEach , push , pop , shift , unshift , spread , closure

//Add a new fruit "Mango" to the end of the array.
const fruit = ["Apple", "Banana", "Orange"]

//Create a new array that contains only the first letter of each name.

// const firstLetter = fruit.map(
//     (num) =>{
//         return num[0]
//     }
// )
// console.log(firstLetter)

// //Convert all names to uppercase.

// const upperCase = fruit.map(
//     (element) => {
//         return element.toUpperCase()
//     }
// )
// console.log(upperCase)

// fruit.push("mango"); //["Apple", "Banana", "Orange", "Mango"]

// console.log(fruit)


// fruit.pop() //Remove the last element from the array. Return the removed element ['Apple', 'Banana', 'Orange']

// console.log(fruit)

// fruit.unshift("start") //['start', 'Apple', 'Banana', 'Orange']
// console.log(fruit)

// fruit.shift() // remove first element of the array


// console.log(fruit)

// const num = [10, 20, 30, 40];

// num.shift();

// console.log(num)
//Print each name from the array.
// fruit.forEach( //forEach() expects a function
//     (fruit) => {
//         console.log(fruit)
//     }
// )

//Create a new array where each number is multiplied by 2.

// const result = num.map(
//     (num) => {
//         return num * 2
//     }
// )

// console.log("map " + result)

// const incNum = num.map(
//     (num) => {
//         return num + 5
//     }
// )

// console.log("map " + incNum)



// const marksArray = [
//     { name: "Aman", marks: 60 },
//     { name: "Rahul", marks: 80 },
//     { name: "Neha", marks: 90 }
// ]

// //Get only the product names from an array of objects.

// const productName= marksArray.map(
//     name=>name.name
// )
// console.log(productName)
// //Return students who scored more than 70.


// const greaterMarks= marksArray.filter(
//     (num)=>{
//        return num.marks>70
//     }
// )
// console.log(greaterMarks)


// //Combine two arrays into one.

// arr1 = [1, 2, 3]
// arr2 = [4, 5, 6]

// newArray = [...arr1, ...arr2]
// console.log(newArray)


// // Return only even numbers from the array.

// const Numbers = [14, 24, 31, 30, 234, -44, 1, 2, 2, 3, 4, 4, 5, 10, 90, 100, 5, 10, 2, 8, 0]
// const product = [
//     { name: "Pen", price: 10 },
//     { name: "Book", price: 40 },
//     { name: "Bag", price: 100 }
// ]

// //Find the most expensive product.

// const mostExp = product.reduce(
//     (max,product)=>{
//         return product.price >max.price ? product:max//revise it again
//     }
// )

// console.log("Find the most expensive product " ,mostExp)

// //Remove duplicate numbers from an array.
// //const setName = new Set(iterable)

// const uniqueArr = [...new Set(Numbers)]
// console.log(uniqueArr)


// //Check if any number is negative.

// const negative = Numbers.some(
//     (num) => {
//         return num < 0
//     }
// )
// console.log(`are there any negative no. ${negative}`)

// //Check if all numbers are greater than 10.

// const greater = Numbers.every(
//     (num) => {
//         return num >= 5
//     }
// )
// console.log(greater)

// //Sort numbers in ascending order.

// console.log(Numbers.sort(
//     (a, b) => a - b
// ))

// //Reverse the order of numbers.

// console.log(Numbers.reverse())

// //Remove 2 elements starting from index 1.

// console.log(removeElement = Numbers.splice(1, 2));



//Create a new array containing only the first 3 elements.

// console.log(Numbers.slice(0, 3))
//Calculate the total price of products.

// const totalPrice = product.reduce(
//     (acc, product) => {
//         return acc + product.price
//     }, 0
// )
// console.log(totalPrice)

// //Calculate the sum of all numbers.

// const sum = Numbers.reduce(
//     (acc, curr) => {
//         return acc + curr
//     }, 0
// )
// console.log(sum)


// const even = Numbers.filter(
//     (Array) => {
//         if (Array % 2 === 0) {
//             return Array
//         }

//     }
// )
// console.log("filter " + even)

// //Return only numbers greater than 50.

// const greaterNum = Numbers.filter(
//     (element) => {
//         if (element >= 55) {
//             return element
//         }
//     }
// )
// console.log(greaterNum)

// //Find the first number greater than 30.

// const firstNum = Numbers.find(
//     (element) => {
//         if (element >= 30) {
//             return element;
//         }
//     }
// )
// console.log(firstNum)



// loops and array 

// Print numbers from 10 to 1 using a while loop

i = 10

// while(i>=1){
//     console.log(i)
//     i--;
// }

// do {
//     console.log(i)
//     i--
// } while (i >= 5)





//Print all numbers from an array.

const Numbers = [14, 24, 31, 5, 10, 7, 9, 25, 67, 8, 0, 77, 65, 88, 979]

// Numbers.forEach(
//     num => console.log(num))

// for(i=0; i<Numbers.length; i++ ){
//     console.log(Numbers[i])
// }

// nameArray=["Utkarsh", "Rahul", "Aman"];

// nameArray.forEach(element => {
//     console.log(element)
// });



//Calculate the sum of all numbers in an array.

// sum=0
// for (i=0; i<Numbers.length;i++){
//     sum = sum +Numbers[i]

// }
// console.log(sum)




// Print only even numbers from an array.

// for (i = 0; i < Numbers.length; i++) {
//     if (Numbers[i] % 2 === 0) {
//         console.log(Numbers[i])
//     }

// }



//Count how many numbers are greater than 50.

// for(i=0;i<Numbers.length;i++){
//     if (Numbers[i]>=50){
//         console.log(Numbers[i])
//     }
// }



//Find the largest number in an array.
// max = 0

// const maxNum = Numbers.forEach(
//     (num) => {
//         if (num > max) {
//             max = num
//             return max
//         }
//     }
// )
// console.log(max)



//Create an array containing numbers 1 to 5 using a loop.

// emptyArray = []
// for (i = 1; i <= 5; i++) {
//     emptyArray.push(i)
// }
// console.log(emptyArray)


//Print each number multiplied by 2.

// for (i = 0; i < Numbers.length; i++) {
//     const multiple = Numbers[i] * 2
//     console.log(multiple)
// }

// console.log(multiple)

//Print a simple pattern.
document.write("<h3>Print a simple pattern :</h3>");

n = 5
for (i = 1; i <= n; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
        row = row + "*"
    }
    document.write(row + "<br>")
}

document.write("<h3>Print all numbers from a 2D array. :</h3>");

const twoDarray = [
    [1, 2],
    [3, 4],
    [5, 6]
]

// console.log(twoDarray.length)

for (i = 0; i < twoDarray.length; i++) {
    for (j = 0; j < twoDarray[i].length; j++) {
        document.write(twoDarray[i][j] + "<br>")
    }
}

//Find the total sum of numbers in a 2D array.

document.write("<h3>Find the total sum of numbers in a 2D array. :</h3>");

sum = 0
for (i = 0; i < twoDarray.length; i++) {

    for (j = 0; j < twoDarray[i].length; j++) {
        sum += twoDarray[i][j]
    }
}
document.write("Total Sum: " + sum);

//Print a reverse triangle of stars with 4 rows.

document.write("<h3>Print a reverse triangle of stars with 4 rows. :</h3>");

n = 4
for (i = 1; i <= n; i++) {
    let row = ""
    for (j = n - i; j >= 0; j--) {
        row += "*"
    }
    document.writeln(row + "<br>")
}

//Print a triangle of numbers.

document.write("<h3>Print a triangle of numbers. :</h3>");

n = 5

for (i = 1; i <= n; i++) {
    let row = ""
    for (j = 1; j <= i; j++) {
        row = row + j
    }
    document.write(row + "<br>")
}


//Print a square of stars.

document.write("<h3>Print a square of stars. :</h3>");

n = 3

for (i = 1; i <= n; i++) {
    let row = ""
    for (j = 1; j <= n; j++) {
        row += "*"
    }
    document.write(row + "<br>")
}

//Print a right-aligned triangle of stars.

// document.write("<h3>Print a right-aligned triangle of stars. :</h3>");

//    *
//   **
//  ***
// ****

document.write("<h3>Print a right-aligned triangle of stars. :</h3>");

n = 4
for (i = 1; i <= n; i++) {
    let row = ""
    for (j = 1; j <= n - i; j++) {
        row += "&nbsp;"
    }
    for (k = 1; k <= i; k++) {
        row += "*"
    }
    // console.log(row);
    document.write(row + "<br>")


}


//Print a triangle of repeated numbers (same number in a row).

document.write("<h3>Print a triangle of repeated numbers (same number in a row). :</h3>");

n = 4
for (i = 1; i <= n; i++) {
    let row = ""
    for (j = 1; j <= i; j++) {
        row = row + i
    }
    document.write(row + "<br>")
}



n = 4;
//Print a pyramid of numbers.

document.write("<h3>Print a pyramid of numbers. :</h3>");


for (i = 1; i <= n; i++) {
    let row = ""
    for (j = 1; j <= n - i; j++) {
        row += "&nbsp;"
    }
    for (k = 1; k <= i; k++) {// ascending numbers
        row += k
    }
    for (l = i - 1; l >= 1; l--) {// descending numbers
        row += l
    }
    // console.log(row)
    document.write(row + "<br>")
}

//Print a triangle of letters.

document.write("<h3>Print a triangle of letters. :</h3>");

n = 5

for (i = 1; i <= n; i++) {
    let row = ""
    for (j = 1; j <= i; j++) {
        row += String.fromCharCode(64 + j)
    }
    document.write(row + "<br>")
}

//Create a function called greet() that prints "Hello JavaScript" when called.

document.write("<h3>Create a function called greet() that prints 'Hello JavaScript' when called. :</h3>");


function great() {
    // console.log("fumction called")
    document.write("funtion called")
}

great()



//Create a function sayHello(name) that prints "Hello <name>".

document.write("<h3>Create a function sayHello(name) that prints Hello name. :</h3>");


function hello(name) {
    document.write(name)
}

hello("Utkarsh")


document.write("<h3>Create a function add(a, b) that prints the sum of two numbers. :</h3>");

function add(a = 0, b = 0) {
    return a + b
}
document.write(add(90, 90))


//Create a function expression that prints "Learning Functions".

document.write("<h3>Create a function expression that prints Learning Functions. :</h3>");


let fucntionVar = function () {
    document.write("Learning Functions")
}

fucntionVar()

//Create a function printNumbers(n) that prints numbers from 1 to n.

document.write("<h3>Create a function printNumbers(n) that prints numbers from 1 to n. :</h3>");

function printNumbers(num) {
    i = 1
    while (i <= num) {
        document.write(i)
        i++
    }

}
printNumbers(5)


//Create a function that returns a new array where each number is doubled.

document.write("<h3>Create a function that returns a new array where each number is doubled. :</h3>");

function doubleNumbers(arr) {

    emptyArr = []
    for (i = 0; i < arr.length; i++) {
        emptyArr.push(arr[i] * 2)
    }

    return emptyArr
}

document.write(doubleNumbers([2, 4, 6]))


// Create a function square(num) and call it for each number in an array.

document.write("<h3>Create a function square(num) and call it for each number in an array. :</h3>");

const numbers = [2, 3, 4, 88]

function sq(num) {
    return num * num
}

for (i = 0; i < numbers.length; i++) {
    document.write(sq(numbers[i]) + "<br>")
}










