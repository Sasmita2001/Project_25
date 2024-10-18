//mathematical operator

/*let num1=5;
let num2=3;
let result = num1 + num2;
console.log(result);

let num3=29;
let odd=num3%2;
console.log(odd);
console.log(5!=="5");*/

//condition
//if (condition){
//true code to be executed here
//}

//false here
//false, 0,-0,"",``,null,undefine,NaN

if (-0) {
  console.log("It is true");
}

//Given totall_bill ,discount_start_price if you satisfy the condition print discount
//Avaliable otherwise print No Discount

let totall_bill = 500;
if (totall_bill > 700) {
  console.log("Get 10% discount");
} else {
  console.log("NO discount");
}

//
/*let age=35;
   if(age>=18){
      console.log("Adult");
   }
  
   else if(age>=60){
      console.log("senior");
   }
  
   else{
      console.log("minor")
   }*/

//check if (male) and then check(22+) then he can able to marry

let age = 30;
let male;
let gender = male;
if (gender === male) {
  if (age >= 22);
  console.log("marry");
} else {
  console.log("not marry");
}

//print all the vowel

let char = "e";
switch (char) {
  case "a":
    console.log("it is voewl ");
    break;

  case "e":
    console.log("it is voewl ");
    break;

  case "i":
    console.log("it is voewl ");
    break;

  case "o":
    console.log("it is voewl ");
    break;

  case "u":
    console.log("it is voewl ");
    break;

    dafault: console.log("it is not a vowel");
}

let week = "1";
switch (week) {
  case "1":
    console.log("Today is monday");
    break;

  case "2":
    console.log("Today is Tuesday");
    break;

  case "3":
    console.log("Today is wedday");
    break;

  case "4":
    console.log("Today is Thursday");
    break;

  case "5":
    console.log("Today is friday");
    break;

  case "6":
    console.log("Today is saturday");
    break;

  case "7":
    console.log("Today is sunday");
    break;

    dafault: console.log("it is not a day ");
}
