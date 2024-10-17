//Question - 1

let foodprice = 150;
let drinkprice = 100;
let tips = ((foodprice + drinkprice) * 10) / 100;
console.log("The waiter tips is=", tips);
let totalbill = foodprice + drinkprice + tips;
console.log("The total bill=", totalbill);

//Question-2

let OriginalPrice = 250;
let discount = (OriginalPrice * 20) / 100; //20% discount
console.log("The discount amount is", discount);
let finalprice = OriginalPrice - discount;
console.log("After discount the final price is", finalprice);

//Question-3

let productPrice = 234;
let salesTaxRate = (productPrice * 8) / 100;
console.log("The sales tax is", salesTaxRate);
let totalprice = productPrice + salesTaxRate;
console.log("The total price of the product is", totalprice);
