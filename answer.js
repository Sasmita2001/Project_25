//1. What is Math.floor() do in javascript?
//A:Math.floor() is predefined function in javascript used to round down to an integer which is the nearest or equal to the given number.

//2.How would you generate a random number between 1 and 100/?
//A:

let start = 1;
let end = 100;
let random_num = end - start + 1;
//console.log(Math.random() * random_num);
console.log(Math.floor(Math.random() * random_num));

//3.What is the purpose of Math.ceil()?Give anexample?
//A:Math ceil() is a function that round a number up to the nearest integer
//Ex:
let num = 23.67;
console.log(Math.ceil(num));

//4.Explain how Math.pow(2,3)works and what the output will be?
//A:Math.pow()is a function used to calculate the power of a number.
console.log(Math.pow(2, 3));

//5.What is the value of Math.PI?gi
//A:Math.PI gives the value of pi
console.log(Math.PI);

//TASK:
//1.Generate a random number between 1 and 100.
let Snum = 1;
let Enum = 100;
let Random_num = Enum - Snum + 1;
console.log(Math.random() * random_num);
console.log(Math.floor(Math.random() * random_num));

//2.Round the number 6.75 down to the nearest integer.

console.log(Math.floor(6.75));

//3.Round the number 9.12 up to the nearest integer.

console.log(Math.ceil(9.12));

//4.Generate a random number between 5 and 27 (inclusive).
let start1 = 5,
  end1 = 27;
let total = end1 - start1 + 1;
console.log(Math.floor(Math.random() * total) + start1);

//5. Add 5 days to the current date.

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);
console.log(currentDate);

//6.Get the number of milliseconds between January 1, 2023, and today.

let givenDate = new Date("2023-01-01");
console.log(givenDate);
let currDate = new Date();
console.log(currDate);
let result = currDate - givenDate;
console.log(result);

//7.Get the current hour.

let currentHour = new Date();
console.log(currentHour.getHours());

//8.Create a date for January 1, 2025.

let date = new Date();
console.log(date);
let res = new Date(2025, 1, 1);
console.log(res);

//9.Get the current day of the week (0 for Sunday, 6 for Saturday).

let currentDay = new Date();
console.log(currentDay.getDay());

//10. Task: Get the current month (0-11).

let currentMonth = new Date();
console.log(currentMonth.getMonth());
console.log(currentMonth.getDate());


//11. Task: What is the difference between getDate() and getDay()?

//A:getDate() is a function which return the day of the month(1-31)
//getDay() is a function which return the day of the week(0-6)
