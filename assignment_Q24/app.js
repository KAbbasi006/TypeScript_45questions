"use strict";
//Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//Equality with Strings
console.log("Testing with equlaity");
let fruit = "apple";
console.log(fruit == "apple");
console.log(fruit == "Apple");
//Testing using lowercase function
console.log("Testing with Lower case function");
console.log("Apple".toLowerCase() == "apple");
console.log("Apple".toLowerCase() == "Apple");
//Numerical Testing using Equality and inequality, greater than and less than , greater than or equal to and less than or equal to
console.log("Numerical Testing");
let num1 = 5;
console.log(num1 == 5);
console.log(num1 != 5);
console.log(num1 > 4);
console.log(num1 < 4);
console.log(num1 <= 6);
console.log(num1 >= 6);
//Testing with "And" and "or"
console.log("Testing with && and ||");
console.log(num1 > 0 && num1 < 10);
console.log(num1 < 0 && num1 > 10);
console.log(num1 > 0 || num1 > 90);
console.log(num1 < 0 || num1 > 6);
// Test whether an item is in a array
console.log(" Test whether an item is in a array");
let scandenavian_countries = ["Sweden", "Denmark", "Norway", "Iceland", "Finland"];
console.log("Is Norway in Scandenavian Countries? ", scandenavian_countries.includes("Norway"));
console.log("Is Korea in Scandenavian Countries? ", scandenavian_countries.includes("Korea"));
// Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log("Is Japan not in Scandenavian Countries? ", !scandenavian_countries.includes("Japan"));
console.log("Is Finland not in Scandenavian Countries? ", !scandenavian_countries.includes("Finland"));
