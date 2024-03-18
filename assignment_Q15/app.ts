
//Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a newset of invitations. You’ll have to think of someone else to invite.

 //• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
 //• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 //• Print a second set of invitation messages, one for each person who is still in your list.

let guests:string[] = ["Alice", "Eric", "Joe", "Martha", "David"];
guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for the dinner?`)
})

let unableToAttend:string = "Joe";
console.log(`${unableToAttend} can't make it to dinner.`);
//replacing guest with a new one
let newGuest:string = "Daniel"
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})
