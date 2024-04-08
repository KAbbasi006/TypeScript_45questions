//Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["Jospeh", "Alice", "Martha"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
// show_magicians(magicians);
// function make_great(magicians:string[]){
//     for (let i = 0; i < magicians.length; i++){
//         magicians[i] = magicians[i] + " the Great"
//     }
// }
// make_great(magicians)
// show_magicians(magicians)
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push("".concat(magicians, " the Great!"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log("Original magicians: ");
show_magicians(magicians);
console.log("Great magicians: ");
show_magicians(greatMagicians);
