//Array
var guestList = ['Shahrukh Khan', 'Salman Khan', 'Amir Khan'];
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
}
var absentGuest = "shahrukh khan";
var newGuest = "Amitabh bachan";
guestList[0] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIts our pleasure to invite you in our home.\n\nThank You!\n\n');
}
console.log("Mr. ".concat(absentGuest, " is not coming."));
