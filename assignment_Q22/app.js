"use strict";
//Q22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let friends = ["Almas", "Urooj", "Ramza", "Saba"];
console.log(friends[4]); //intentional Error: Arrays are 0 indexed, so index 4 is out of the bound.
console.log(friends[3]); //Correcting the error by accessing a valid index.
