"use strict"
// 1. Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice
// 
// function problemOne (array, number){
//     for (let i=0; i<array.length; i++){
//         for (let j=0; j<array.length; j++){
//             if (array[i]+array[j] === number){
//                 console.log(`${array.indexOf(array[i])} and ${array.indexOf(array[j])}`)
//             }
//         }
//     }
// }
// let array = [5, 17, 77, 50];
// let number = 55;
// problemOne(array, number);

// 2. Palindrome
// Reusing code from the first worksheet but going to add in an alert to tell the user the result.

// let string3 = prompt("What string would you like to check");
// let returnString3 = "";
// function ReverseString3 (string){
//     for (let i=string3.length - 1; i>= 0; i--){
//         returnString3 = returnString3 + string[i];
//     };
//    if (returnString3 === string){
//     console.log('Palindrome');
//     alert('Palindrome');
//    }else if (returnString3 !== string){console.log('Failed Test');
//    alert('Not a Palindrome');};

// };
// ReverseString3(string3);


// 3. Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers
// (1) Create a function that takes in an array
// (2) Loop through the array
// (3) Figure out how to order the numbers from smallest to greatest
// (4) Figure out how to check if a number is missing
// (5) Return if its true or false
// let cur;
// let next;
// function IsList (array){
//     for (let i=0; i<array.length; i++){
// cur = array[i];
// next = array[i+1];
//     }
// }

let cur;
let next;
let newArray = [];
// need to deleted let after uncomenting
let array = [6, 7, 4, 9, 10, 5, 8];

function RearangeArray (array){
    for (let i=0; i<array.length;i++){
        cur = array[i];
        next = array[i+1];
        if (cur<next){
            newArray.push(cur);
            array.shift();
            i--;
            
        }else if (cur>next){
            array.push(cur);
            array.shift();};
    }
    return newArray;
};
console.log(RearangeArray(array));
