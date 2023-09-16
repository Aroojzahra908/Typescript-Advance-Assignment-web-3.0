"use strict";
// 2.Personal Message: Store a person’s name in a variable, and print a message to 
// that person. Your message should be simple, such as, “Hello Eric, would you like 
// to learn some Python today?”
var Name = "Eric";
console.log("hello " + Name, ",would you like to learn some Python today?");
// 3.Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.
var Person = "Arooj zahra";
var a = Person.toLocaleLowerCase();
console.log("lower case", a);
var b = Person.toUpperCase();
console.log("upper case", b);
// 4.Famous Quote: Find a quote from a famous person you admire. Print the quote 
// and the name of its author. Your output should look something like the following, 
// including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var author = "Albert Einstein once said,";
var nam = "A person who never made a mistake never tried anything new.";
// var nam = '"A person who never made a mistake never tried anything new."'
// console.log(author, nam)
console.log(`${author} "${nam}"`);
console.log(author + " \"" + nam + "\"");
// 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
// in a variable called famous_person. Then compose your message and store it in a 
// new variable called message. Print your message.
var famous_person = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
var message = famous_person + " once said, \"" + quote + "\"";
console.log(message);
var famous_person = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
// 6.Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name. Make sure you use each character 
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
// around the name is displayed. Then print the name after striping the white 
// spaces.
var nameWithWhitespace = "\t   \n John Doe \t   \n"; // Name with whitespace
console.log("Name with Whitespace:");
console.log(nameWithWhitespace); // Print with whitespace
// Remove leading and trailing whitespace
var strippedName = nameWithWhitespace.trim();
console.log("\nName after Stripping Whitespace:");
console.log(strippedName); // Print after stripping whitespace
// 7.Number Eight: Write addition, subtraction, multiplication, and division operations 
// that each result in the number 8. Be sure to enclose your operations in print 
// statements to see the results.
// Addition
var additionResult = 5 + 3;
console.log("Addition Result:", additionResult); // Output: 8
// Subtraction
var subtractionResult = 10 - 2;
console.log("Subtraction Result:", subtractionResult); // Output: 8
// Multiplication
var multiplicationResult = 4 * 2;
console.log("Multiplication Result:", multiplicationResult); // Output: 8
// Division
var divisionResult = 16 / 2;
console.log("Division Result:", divisionResult); // Output: 8
// 9. Favorite Number: Store your favorite number in a variable. Then, using that 
// variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 42; // Your favorite number
var message = "My favorite number is ";
console.log(message, favoriteNumber); // Output: My favorite number is 42.
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least 
// one comment to each. If you don’t have anything specific to write because your 
// programs are too simple at this point, just add your name and the current date at 
// the top of each program file. Then write one sentence describing what the 
// program does.
var favoriteNumber = 42; // Your favorite number
var message = "My favorite number is ";
console.log(message, favoriteNumber); // Output: My favorite number is 42.
// 11. Names: Store the names of a few of your friends in a array called names. Print 
// each person’s name by accessing each element in the list, one at a time.
var names = ["Alice", "Bob", "Charlie", "David", "Emily"]; // Array of friend names
// Print each person's name one at a time
console.log("Names of Friends:");
console.log(names[0]); // Print the first name (Alice)
console.log(names[1]); // Print the second name (Bob)
console.log(names[2]); // Print the third name (Charlie)
console.log(names[3]); // Print the fourth name (David)
console.log(names[4]); // Print the fifth name (Emily)
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing 
// each person’s name, print a message to them. The text of each message should 
// be the same, but each message should be personalized with the person’s name.
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
for (var i = 0; i < names.length; i++) {
    var message = "Hello, " + names[i] + "! Have a great day!";
    console.log(message);
}
// 13.Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. Use your list to 
// print a series of statements about these items, such as “I would like to own a 
// Honda motorcycle.”
var transportation = ["car", "motorcycle", "honda", "cycle", "mehran"];
for (var i = 0; i < transportation.length; i++) {
    var list = "I would like to own a " + transportation[i];
    console.log(list);
}
// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who would 
// you invite? Make a list that includes at least three people you’d like to invite to 
// dinner. Then use your list to print a message to each person, inviting them to 
// dinner.
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
// Print invitations to dinner guests
for (var i = 0; i < dinnerGuests.length; i++) {
    var invitation = "Dear " + dinnerGuests[i] + ", you are invited to dinner at my place.";
    console.log(invitation);
}
// 15. Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think of 
// someone else to invite
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
var guestToReplace = "arooj"; // The guest who can't make it
var newGuest = "arooj zahra"; // The new guest
// Iterate through the list of guests
for (var i = 0; i < dinnerGuests.length; i++) {
    // Check if the current guest matches the one to replace
    if (dinnerGuests[i] === guestToReplace) {
        // Replace the guest
        dinnerGuests[i] = newGuest;
    }
}
// Print updated invitations
for (var j = 0; j < dinnerGuests.length; j++) {
    var invitation = "Dear " + dinnerGuests[j] + ", you are invited.";
    console.log(invitation);
}
//second method
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
dinnerGuests.splice(2, 1, "hamna");
for (var i = 0; i < dinnerGuests.length; i++) {
    var invitation = "Dear " + dinnerGuests[i] + ", you are invited to din.";
    console.log(invitation);
}
// a.Start with your program from Exercise 14. Add a print statement at the end of 
// your program stating the name of the guest who can’t make it.
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
var guestToReplace = "arooj"; // The guest who can't make it
var newGuest = "arooj zahra"; // The new guest
// Iterate through the list of guests
for (var i = 0; i < dinnerGuests.length; i++) {
    // Check if the current guest matches the one to replace
    if (dinnerGuests[i] === guestToReplace) {
        // Replace the guest
        dinnerGuests[i] = newGuest;
    }
}
// Print updated invitations
for (var j = 0; j < dinnerGuests.length; j++) {
    var invitation = "Dear " + dinnerGuests[j] + ", you are invited.";
    console.log(invitation);
}
console.log(guestToReplace, "cannot make it");
//b.c // same as a
// 16. More Guests: You just found a bigger dinner table, so now more space is 
// available. Think of three more guests to invite to dinner.
var guest = ["guest 1", "guest 2", "guest 3", "guest 4"];
var new_guest = ["guest 5", "guest 6", "guest 7"];
var new_list = guest.concat(new_guest);
for (var i = 0; i < new_list.length; i++) {
    console.log(new_list[i] + " is invited according to the list");
}
// a.Start with your program from Exercise 15. Add a print statement to the end of 
// your program informing people that you found a bigger dinner table
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
var guestToReplace = "arooj";
var newGuest = "arooj zahra";
for (var i = 0; i < dinnerGuests.length; i++) {
    if (dinnerGuests[i] === guestToReplace) {
        dinnerGuests[i] = newGuest;
    }
}
for (var j = 0; j < dinnerGuests.length; j++) {
    var invitation = "Dear " + dinnerGuests[j] + ", you are invited.";
    console.log(invitation);
}
console.log(guestToReplace, "you are found in bigger table");
// b. Add one new guest to the beginning of your array.
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
dinnerGuests.unshift("waleed");
for (var i = 0; i < dinnerGuests.length; i++) {
    var invitation = "Dear " + dinnerGuests[i] + ", you are invited to din.";
    console.log(invitation);
}
// c.Add one new guest to the middle of your array. • Use append() to add one new 
// guest to the end of your list. • Print a new set of invitation messages, one for 
// each person in your list.
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
// Add a new guest to the middle of the array
dinnerGuests.splice(Math.round(dinnerGuests.length / 2), 0, "amna");
// Add a new guest to the end of the array
dinnerGuests.push("arfa");
// Print updated invitations
for (var i = 0; i < dinnerGuests.length; i++) {
    var invitation = "Dear " + dinnerGuests[i] + ", you are invite.";
    console.log(invitation);
}
// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
// time for the dinner, and you have space for only two guests.
// a. Start with your program from Exercise 16. Add a new line that prints a 
// message saying that you can invite only two people for dinner
console.log("you can invite only two people for dinner");
// b. Remove guests from your list one at a time until only two names remain in 
// your list. Each time you pop a name from your list, print a message to that 
// person letting them know you’re sorry you can’t invite them to dinner.
var dinnerGuests = ["ali", "arooj", "hassan", "zoya", "ayesha"];
while (dinnerGuests.length > 2) {
    var final = dinnerGuests.pop();
    console.log(final, "you’re sorry you can’t invite them to dinner.");
}
console.log(dinnerGuests, "original list");
// c. Print a message to each of the two people still on your list, letting them 
// know they’re still invited.
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log(dinnerGuests[i], "you are still invited");
}
// d.Remove the last two names from your list, so you have an empty list. Print 
// your list to make sure you actually have an empty list at the end of your 
// program.
for (var i = 0; i <= dinnerGuests.length; i++) {
    dinnerGuests.pop();
}
console.log(dinnerGuests);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// a. Store the locations in a array. Make sure the array is not in alphabetical 
// order
var favLocation = ["a", "p", "c", "b", "d"];
// b. Print your array in its original order.
console.log("array in its original order is:", favLocation);
// c. Print your array in alphabetical order without modifying the actual list.
var Copyarray = [...favLocation];
Copyarray.sort();
console.log(Copyarray);
// d. Show that your array is still in its original order by printing it.
console.log(favLocation);
// e. Print your array in reverse alphabetical order without changing the order 
// of the original list.
var Copyarray1 = [...favLocation];
Copyarray1.reverse();
console.log(Copyarray1);
// f. Show that your array is still in its original order by printing it again
console.log(favLocation);
// h. Reverse the order of your list again. Print the list to show it’s back to its 
// original order.
var Copyarray1 = [...favLocation];
Copyarray1.sort();
console.log(Copyarray1);
// i. Sort your array so it’s stored in alphabetical order. Print the array to show 
// that its order has been changed.
var Copyarray1 = [...favLocation];
Copyarray1.sort();
console.log(Copyarray1);
// j. Sort to change your array so it’s stored in reverse alphabetical order. Print 
// the list to show that its order has changed.
var Copyarray1 = [...favLocation];
Copyarray1.reverse();
console.log(Copyarray1);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
var dinner = ["ali", "fatime", "ahmad"];
var maxpeople = 0;
for (var i = 0; i < dinner.length; i++) {
    maxpeople = maxpeople + i;
}
console.log("Total number of peoples are invited", maxpeople);
// 20.Think of something you could store in a array. For example, you could make a list 
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write 
// a program that creates a list containing these items.
// Create an array of countries
var countries = ["USA", "Canada", "Australia", "Germany", "Japan", "France", "Brazil", "India"];
// Print the list of countries
console.log("List of Countries:");
for (var i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}
// 21. They think of something you could store in a TypeScript Object. Write a program 
// that creates Objects containing these items.
const city1 = {
    name: "New York",
    country: "USA",
    population: 8398748,
    famousFor: "Statue of Liberty"
};
// 22.Intentional Error: If you haven’t received an array index error in one of your 
// programs yet, try to make one happen. Change an index in one of your programs 
// to produce an index error. Make sure you correct the error before closing the 
// program.
var names = ["Alice", "Buddie", "Charlie", "David", "Emily"];
names.splice(1, 0, "Ali");
console.log(names);
console.log(names[10]);
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing 
// each test and your prediction for the results of each test. Your code should look 
// something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// a.Look closely at your results, and make sure you understand why each line 
// evaluates to True or False.
//1
let num = 42;
console.log("Is car == '42'? I predict True.");
console.log(num == 42);
//2 test for inequality
let fruit = "bannana";
console.log("is fruit is not equal to apple??");
console.log(fruit != "apple");
//3 numeric comparison
var number = 20;
console.log("the number is <30");
console.log(number < 30);
//4 weekend test
let year = "september";
console.log("is it september??? i predict true");
console.log(year == "september");
//6 logical
var isweekend = true;
var hasplane = false;
console.log("today i have a plan i predict false");
console.log(isweekend && hasplane);
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True 
// and one False result for each of the following:
// a. Tests for equality and inequality with strings
// Tests for equality with strings
var string1 = "apple";
var string2 = "banana";
console.log("Equality Tests:");
console.log(string1 === string2); // False
console.log(string1 === "apple"); // True
// Tests for inequality with strings
console.log("Inequality Tests:");
console.log(string1 !== string2); // True
console.log(string2 !== "banana"); // False
// b. Tests using the lower case function
// Tests using the toLowerCase() function
var string1 = "JavaScript";
var string2 = "javascript";
console.log("Case Insensitive Equality Tests:");
console.log(string1.toLowerCase() === string2.toLowerCase()); // True, because it's case-insensitive equal
console.log(string1.toLowerCase() == "javascript");
var string3 = "Python";
var string4 = "Ruby";
console.log("Case Insensitive Inequality Tests:");
console.log(string3.toLowerCase() !== string4.toLowerCase()); // True, because they are not equal (case-insensitive)
// c. Numerical tests involving equality and inequality, greater than and less 
// than, greater than or equal to, and less than or equal to.
// Numerical Tests
var num1 = 10;
var num2 = 5;
// Equality test
console.log("Equality Test:", num1 === num2); // False, because 10 is not equal to 5
// Inequality test
console.log("Inequality Test:", num1 !== num2); // True, because 10 is not equal to 5
// Greater than test
console.log("Greater Than Test:", num1 > num2); // True, because 10 is greater than 5
// Less than test
console.log("Less Than Test:", num1 < num2); // False, because 10 is not less than 5
// Greater than or equal to test
console.log("Greater Than or Equal To Test:", num1 >= num2); // True, because 10 is greater than or equal to 5
// Less than or equal to test
console.log("Less Than or Equal To Test:", num1 <= num2); // False, because 10 is not less than or equal to 5
// d. Tests using "and" and "or" operators
var x = 5;
var y = 10;
// "and" operator (&&) 
console.log("And Operator Test:", x < 10 && y > 5); // True, because both conditions are true
// "or" operator (||) 
console.log("Or Operator Test:", x === 5 || y === 5); // True, because the first condition is true
// Combining "and" and "or" operators
console.log("Combined Test:", (x < 10 && y > 5) || (x === 5 && y === 5)); // True, because the first part (x < 10 && y > 5) is true
// e. Test whether an item is in a array.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var itemToCheck = "banana";
// Check if the item is in the array using includes
var isInArray = fruits.includes(itemToCheck);
console.log("Is", itemToCheck, "in the array?", isInArray); // Should print "Is banana in the array? true"
// f. Test whether an item is not in a array.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var itemToCheck = "orange";
// Check if the item is not in the array using includes and negation
var isNotInArray = !fruits.includes(itemToCheck);
console.log("Is", itemToCheck, "not in the array?", isNotInArray); // Should print "Is orange not in the array? true"
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable 
// called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// a. Write an if statement to test whether the alien’s color is green. If it is, print 
// a message that the player just earned 5 points
var alien_color = "green";
if (alien_color == "green") {
    console.log("it is, print a message that the player just earned 5 points");
}
else {
    console.log("color is not available");
}
// b. Write one version of this program that passes the if test and another that 
// fails. (The version that fails will have no output.)
var alien_color = 'red';
if (alien_color == "red")
    console.log("You just earned 10 points.");
if (alien_color == "yellow")
    console.log("You just earned 20 points.");
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an 
// if-else chain.
// a. If the alien’s color is green, print a statement that the player just earned 5 
// points for shooting the alien.
var alien_color = 'green';
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 20 points.");
}
// b. If the alien’s color isn’t green, print a statement that the player just earned 
// 10 points.
var alien_color = 'red';
if (alien_color != "green") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("You just earned 5 points.");
}
// c. Write one version of this program that runs the if block and another that 
// runs the else block
var alien_color = 'red';
if (alien_color == "green") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("You just earned 5 points."); // runs the else block
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// a. If the alien is green, print a message that the player earned 5 points
var alien_color = 'green';
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else {
    console.log("You just earned 3 points.");
}
// b. If the alien is yellow, print a message that the player earned 10 points.
var alien_color = 'yellow';
if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("You just earned 3 points.");
}
// c. If the alien is red, print a message that the player earned 15 points.
var alien_color = 'red';
if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("You just earned 3 points.");
}
// second method
var alien_color = 'red';
if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points.");
}
else {
    console.log("You just earned 5 points.");
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a 
// value for the variable age, and then:
// a. If the person is less than 2 years old, print a message that the person is a 
// baby.
var age = 24;
if (age < 2) {
    console.log("The person is a baby");
}
// b. If the person is at least 2 years old but less than 4, print a message that the 
// person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("This person is a toddler.");
}
// c. If the person is at least 4 years old but less than 13, print a message that 
// the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("This person is a kid.");
}
// d. If the person is at least 13 years old but less than 20, print a message that 
// the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("This person is a teenager.");
}
// e. If the person is at least 20 years old but less than 65, print a message that 
// the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("This person is a adult.");
}
// f. If the person is age 65 or older, print a message that the person is an 
// elder.
else if (age >= 65) {
    console.log("This person is a elder.");
}
else {
    console.log("this age is greater then given age");
}
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits
var favorite_fruits = ['mango', 'banana', 'kiwi'];
// b. Write five if statements. Each should check whether a certain kind of fruit is 
// in your array. If the fruit is in your array, the if block should print a 
// statement, such as You really like bananas!
if (favorite_fruits.includes("mango")) {
    console.log(" You really like mango!");
}
if (favorite_fruits.includes("banana")) {
    console.log(" You really like banana!");
}
if (favorite_fruits.includes("apple")) {
    console.log(" You really like apple!");
}
else {
    console.log("apple are not in your list of favorite fruits.");
}
if (favorite_fruits.includes("kiwi")) {
    console.log(" You really like kiwi!");
}
if (favorite_fruits.includes("peach")) {
    console.log("You really like peach!");
}
else {
    console.log("peach are not in your list of favorite fruits.");
}
// 30. Hello Admin: Make a array of five or more usernames, including the name 
// 'admin'. Imagine you are writing code that will print a greeting to each user after 
// they log in to a website. Loop through the array, and print a greeting to each 
// user:
var user = ["ali", "hassan", "ahmad", "arooj"];
// a. If the username is 'admin', print a special greeting, such as Hello admin, 
// would you like to see a status report?
user.map((names) => {
    if (names == "hassan") {
        console.log("hello", names, "than you for logging in again");
    }
    // b. Otherwise, print a generic greeting, such as Hello Eric, thank you for 
    // logging in again.
    else if (names == "ali") {
        console.log("hello", names, "than you for logging in again");
    }
    else if (names == "arooj") {
        console.log("hello", names, "than you for logging in again");
    }
});
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var users = ["ali", "hassan", "ahmad", "arooj"];
// a. If the list is empty, print the message We need to find some users!
while (users.length > 0) {
    user.pop();
}
// b. Remove all of the usernames from your array, and make sure the correct 
// message is printed.
if (users.length == 0) {
    console.log("we need some users");
}
// 32. Checking Usernames: Do the following to create a program that simulates how 
// websites ensure that everyone has a unique username.
// a. Make a list of five or more usernames called current_users.
var curent_users = ["ali", "arooj", "hassan", "ahmad", "ayza"];
// b. Make another list of five usernames called new-_users. Make sure one or 
// two of the new usernames are also in the current_users list.
var new_users = ["ali", "farhan", "faiza", "alishba", "ayza"];
// c. Loop through the new_users list to see if each new username has already 
// been used. If it has, print a message that the person will need to enter a 
// new username. If a username has not been used, print a message saying 
// that the username is available.
var existing_users = ["ali", "zoya", "faiza", "alishba", "ayza"];
var new_users = ["ali", "arooj", "hassan", "ahmad", "ayza"];
for (var i = 0; i < new_users.length; i++) {
    var username = new_users[i];
    if (existing_users.includes(username)) {
        console.log(username, "Sorry, the username is already in use.");
    }
    else {
        console.log(username, "Congratulations! The username is available.");
    }
}
//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// a. Store the numbers 1 through 9 in a array.
// b. Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
// and each result should be on a separate line.
for (let i = 1; i <= 9; i++) {
    let ordinal;
    if (i == 1) {
        ordinal = "st";
    }
    else if (i == 2) {
        ordinal = "nd";
    }
    else if (i == 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(i + ordinal);
}
// 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.
var pizzas = ["chicken fajita", "behari kabbab", "malai boti"];
// b. Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// a. Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
var pizzas = ["chicken fajita", "behari kabbab", "malai boti"];
for (let i = 0; i < pizzas.length; i++) {
    console.log("i like", pizzas[i], "pizza");
}
console.log("goood i taste ");
// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of 
// these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Dog", "parriot", "Sparrow"];
for (let i = 0; i < animals.length; i++) {
    console.log("A", animals[i], " would make a great pet");
}
console.log("Any of these animals would make a great pet!");
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array
var magician_names = ["Ali", "Asad", "Alina", "David"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magician_names);
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding the phrase
//the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_names = ["Ali", "Asad", "Alina", "David"];
function make_great(magician) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
    }
}
make_great("Great ");
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a 
//  separate array. Call show_magicians() with each array to show that you have one array of the original names and one array 
//  with the Great added to each magician’s name.
var magician_names = ["Ali", "Asad", "Alina", "David"];
function make_great1(magician = "Great") {
    console.log("magician name with great ");
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
    }
    console.log("origional magician name");
    var copy_magician_name = [...magician_names];
    console.log(copy_magician_name);
}
make_great1();
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
//  should have one parameter that collects as many items as the function call provides, and it should print a 
//  summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich_order(items) {
    console.log(" Summary of your order ");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwich_order(["Sandwich1", "potato Sandwich", "Chicken Sandwich"]);
sandwich_order(["Simple_Sandwich", "egg_Sandwich", "Egg Potato_Sandwich"]);
sandwich_order(["SANDWICH111", "SANDWICH222", "SANDWICH333"]);
// 45. Cars: Write a function that stores information about a car in a Object. The function should
//  always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//   Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//   Print the Object that’s returned to make sure all the information was stored correctly
function car_manu(manufacturer, year, color, model) {
    let car = {
        manufacturer: manufacturer,
        year: year,
        color: color,
        model: model
    };
    return car;
}
let cars = car_manu("bmw", 2003, "red", "bmw191");
console.log(cars);
