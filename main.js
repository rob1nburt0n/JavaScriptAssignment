// Create a variable that holds your name
var myName = "Robin Burton";

// Create an object that holds your personal information
var myInfo = {
  age: 37,
  last_company: "Vanderbilt",
  marital_status: "Not Married",
  spouse: " "
};

// Add your name as a new key on the info object
myInfo.name = "Robin";

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

var Chief = {
  name: "Chief",
  artist: "Eric Church",
  year: 2011,
  sales: 1702000,
  number_of_hits: 5
};

// Create an array that holds records
var recordArray = [Eliminator, Chief];

// Add at least two more album objects to the array
var Abbey_Road = {
  name: "Abbey Road",
  artist: "The Beatles",
  year: 1969,
  sales: 30000000,
  number_of_hits: 2
};
  
var Funhouse = {
  name: "Funhouse",
  artist: "Pink",
  year: 2008,
  sales: 6000000,
  number_of_hits: 7
};

recordArray.push(Abbey_Road, Funhouse); 


/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var newRating = function (album, rank) {
  // Add the rating to the album
  album.rating = rank;
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function addRating(Rating) {
  for (var x = 0; x < recordArray.length; x++) {
  newRating(recordArray[x], 8);
  }
};

// Call the function that starts modifying the array
modifyAlbums();
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById("records");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
