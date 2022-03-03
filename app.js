"use strict"
// 1. Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice
// 

// 2. Palindrome
// Reusing code from the first worksheet but going to add in an alert to tell the user the result.
let string3 = prompt("What string would you like to check");
let returnString3 = "";
function ReverseString3 (string){
    for (let i=string.length - 1; i>= 0; i--){
        returnString3 = returnString3 + string[i];
    };
   if (returnString3 === string){
    console.log('Palindrome');
    alert('Palindrome');
   }else if (returnString3 !== string){console.log('Failed Test');
   alert('Not a Palindrome');};
   
};
ReverseString3(string3);


// 3. Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers
