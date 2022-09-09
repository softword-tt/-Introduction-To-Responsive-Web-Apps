const str = "Hello World";
            
// 1. using charAt() method
console.log(str.charAt(1));
console.log(str.charAt(6));

// 2. using square bracket notation
console.log(str[0]);
console.log(str[1]);
console.log(str[13]); // index out of range, return empty string


const firstName = "Hello";
const lastname = "World";

// 3. using concat method
let result1 = firstName.concat(" ", lastname);
console.log(result1);
// multiple arguments
let result2 = "Learning".concat(" ", "to", " ", "code.");
console.log(result2);
  
// 4. using toLowerCase method
const big = "THE KIDS";
console.log(big.toLowerCase());


// 5. using toUpperCase method
const lower = "I wish I were big.";
console.log(lower.toUpperCase());
