//Array

let guestList : string[] = ['Shahrukh Khan' , 'Salman Khan' , 'Amir Khan'];
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
// }
let absentGuest :string = "shahrukh khan";
let newGuest :string = "Amitabh bachan";
guestList[0] = newGuest;

// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
// }

console.log(`Mr. ${absentGuest} is not coming.`);
console.log("hey! we found a big table so, we are inviting 3 more guests. ")

// add 3 guest in array
guestList.unshift("Ajay Devgan");
guestList.splice(2 , 0 , 'Shahid Kapoor');
guestList.push('Ranbir Kapoor');

// I print 6 guest array here
for(let i=0; i<guestList.length; i++){
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
}

//sorry message to guests for not inviting
console.log("\nsorry we can not arrange big table, only two peoples will be invited.");

// here i removed guests
while(guestList.length >2){
   let removeGuest = guestList.pop();
   console.log(`sorry Mr. ${removeGuest}, you are not invited for dinner.`);

}
// our 2 remaining invited guests
for(let i=0; i<guestList.length; i++){
    console.log('Dear Mr. ' + guestList[i] + ',\n\nyou are still invited.\n\nThank You!\n\n');
}
// I removed all the guests from array
guestList.splice(0, 2);
console.log(guestList);
