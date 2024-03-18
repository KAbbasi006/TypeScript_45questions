"use strict";
//Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guests = ["Alice", "Eric", "Joe", "Martha", "David"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for the dinner?`);
});
let unableToAttend = "Joe";
console.log(`${unableToAttend} can't make it to dinner.`);
//replacing guest with a new one
let newGuest = "Daniel";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
console.log("Great News! I found a bigger dinner table.");
//Adding New Guests
guests.unshift("Ahad");
guests.splice(3, 0, "Raza");
guests.push("Meer");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
