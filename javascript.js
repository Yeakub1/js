// JavaScipt Revision:

// js a price update kora:-------------------------------
var price1 = 30;
var price2 = 20; 
totalPrice = price1 + price2;

 price1 = price1 + 10;
//  short hand:
price1 += 20;
console.log(price1);


// Convart String to Number : ------------------------------
var Price1 = "40";
var Price2 = 30;
TotalPrice = Price1 + Price2;
Price1 = parseInt(Price1);
console.log(Price1);


// Convart Vognaonso to Number : ------------------------------
var gpa = 3.76;
var gapNumber = parseFloat(gpa);
console.log(gapNumber);


// var a ki rokom man ace dekar jonno -----------------------------
var Num = 40;
console.log(typeof Num);

// var ar kon valu na takle se ta undifaind hoi-------
jemon: var romantic;
// ay var ar kon valu nay tay ay ta undifaind



// Doshomik ar por a koto gor number dekte chai tar jonno-----------------
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
// ParseFloat dia sting k num a convart korci, vognaonso ar jonno parsefloat use hoice,---
sum = parseFloat(sum) 
console.log(sum);



// Vag ses ber korar jonno -------------------------------
var num1 = 456; 
var num2 = 34;
vagfol = num1 % num2;
console.log(vagfol);



// ============================  Array  =================================



// array modde koto ta element ace ta dekar jonno ----------
var friendFee = [200, 300, 400, 500, 600, 700]
console.log(friendFee.length);


// get  element by index chake now:----------------
var number = [45, 30, 50, 64, 89, 34, 83, 22, 56];
// find valu of index position-------
var element = number[5];
// index a valu update kora:----------
number[2] = 100; 
// find index of element:-----------
var position = number.indexOf(22);
console.log(position);


// push or pop array system:------------------------------
var number = [45, 66, 33, 47, 46, 90,]
number.push(45);
number.pop();
console.log(number);

// array ar frist a element add korar jonno:-----------
var number = [45, 66, 33, 47, 46, 90,]
number.unshift(11);

// array ar frist a element remove korar jonno:-----------
var number = [45, 66, 33, 47, 46, 90,]
number.shift(11);



// Conditinoal array system:---------------------------
var iPhoenePrice = 180000;
var myBeget = 80000;
var vivoPhoen = 80000;

if (myBeget >= iPhoenePrice) {
    console.log("I iphone kine futani marbo");
}
else if (myBeget >= vivoPhoen){
    console.log("vivo phone kine futani marbo");
}
else{
    console.log("amr kopal a kno phoen nay ");
}

// Conditionl arary ar or system:------------------------------------
var sellary = 50000;
var iPhoen = 1;
var Car = 2;
var bow = 1;

if (60000 <= sellary ||  2 <= iPhoen || 3 <= Car ) {
    console.log("ami biye korbo ki moja");
}
else if (1 <= bow){
    console.log("ay ber amr biye kew tekaite parbe na");
}
else{
    console.log("amr kopal a biye nay");
}




// ============================= loop ================================
// while loop:------------------
var Rostgiven = 1;
while (Rostgiven <= 7) {
    console.log("Rost den vai please vai");
    console.log(Rostgiven);
    // Rostgiven = Rostgiven + 1;
    // Rostgiven += 1;
    Rostgiven ++;
}




// Simple virsion of for loop :---------------
for (var i = 0; i <= 7; i++){
    console.log(i);
    console.log("ki moja ki moja");
}



// Display every element of display:------------------------
var numbers = [24, 55, 64, 34, 67, 84, 45, 14];
for(var i = 0; i <= 7; i++){
    number = numbers[i];
    console.log(number);
}

var numbers = [67,93,48,49,54,74,92,50,86,90,65,23,12];
for (var i = 0; i < numbers.length; i++){
    number = numbers[i];
    console.log(number);
}

// String type for loop:---------
var namesl = ["Mofj", "jobbar", "kuddus", "Rohim", "Korim", "Kamal"]
for (var i = 0; i < namesl.length; i++) {
    names = namesl[i];
    console.log(names);   
}


// loop Brack system:---------------------------
for (var i = 1; i <= 20; i++) {
    if (i > 10) {
        break;
    }
    console.log(i);    
}

var Rost = 0;
while (Rost < 10) {
    console.log("Rost den, rost na dile gift dibo na");
    Rost ++;
    console.log(Rost);
    if (Rost > 5) {
        break;
    }
}

var sevenup = 0;
while (sevenup < 29) {
    console.log("Sevenup khabo na, ami spreed khabo");
    sevenup ++;
    console.log(sevenup);
    if (sevenup >= 5) {
        break;
    }
}


var namesl = ["Mofj", "jobbar", "kuddus", "Rohim", "Korim", "Kamal"]
for (var i = 0; i < namesl.length; i++) {
    names = namesl[i];
    if (names == "Korim") {
        break;
    }
    console.log(names);   
}




// ravarse loop:-------------------------
var num = 10;
while (num > 1) {
    num--;
    console.log(num);
}

// reavarse while loop:------
for (var i = 10; i > 0; i--) {
    console.log(i);   
}