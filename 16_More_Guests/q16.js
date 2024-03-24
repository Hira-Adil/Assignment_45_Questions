//Array
var guestList = ['Shahrukh Khan', 'Salman Khan', 'Amir Khan'];
// for(let i=0; i<guestList.length; i++){
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
// }
var absentGuest = "shahrukh khan";
var newGuest = "Amitabh bachan";
guestList[0] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
}
console.log("Mr. ".concat(absentGuest, " is not coming."));
console.log("hey! we found a big table so, we are inviting 3 more guests. ");
guestList.unshift("Ajay Devgan");
guestList.splice(2, 0, 'Shahid Kapoor');
guestList.push('Ranbir Kapoor');
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
}
