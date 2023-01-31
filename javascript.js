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

// array ar jototoku icca kete felar jonno :----------------
var number = [45, 66, 33, 47, 46, 90,]
// array ar 2 to 5 porjonto element remove hove-------
number.slice(2,5);



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

// Simple while loop:--------------------------
var number = 0;
while (number <= 6) {
    console.log(number);
    number++;
}


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
    console.log("Thsi is print is a i element");
}



// Display every element of display:------------------------
var numbers = [24, 55, 64, 34, 67, 84, 45, 14];
for(var i = 0; i <= 7; i++){
    number = numbers[i];
    console.log(number);
    // i<=7 ay jonno i 7 ta element print korbe, i ar man joto hobe i toto gula man print korbe.
}

var numbers = [67,93,48,49,54,74,92,50,86,90,65,23,12];
for (var i = 0; i < numbers.length; i++){
    number = numbers[i];
    console.log(number);
    // i sob gula man print korbe, ay khan i ar man niddesto kore bola nay tay.
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


// ============================= core consept ================================

function startFan() {
    console.log("Stand Up");
    console.log("Going to fan switch");
    console.log("Click This fan switch");
    console.log("Back to your set hear");
}
startFan();



// funcation add policy:----------------------------------------------

function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
}
add(45,15);




// funcation return policy:------------------------

function bingSingara(money) {
    var singaraPrice = 10;
    var quentity = money / singaraPrice;
    return quentity;
}
var myTk = 200;
var singaras = bingSingara(myTk);
console.log("Eiting singaras:", singaras);


// funcation return gor policy:------------------------

function grtAvarage(assigment1, assigment2, assigment3) {
    const total = assigment1 + assigment2 + assigment3;
    const avarage = total / 3;
    return avarage;
}

const assigment1 = 60;
const assigment2 = 59;
const assigment3 = 60;

const averageMark = grtAvarage(assigment1, assigment2, assigment3);
console.log(averageMark, "my assigment mark");


// ak ta objact a onak gula valu lika jai jemon :----------------------

const mycomputer = {
    band : "asus",
    color : "sliver",
    model : "i5",
    ram : "12gb",
    display : 15
}
console.log(mycomputer.display);






// ===================================  today is a revision day  =============================================


// inch to fit convart:-----------

const inch = 12;
const datainch = 144;
const dadafit = datainch / inch;
console.log(dadafit);

// inch to feet funcation a kora:-----------------------

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadainch = 144;
const dadafeet = inchToFeet(dadainch);
console.log(dadafeet);

// funcation ar condition ar lila khela:-----------------------------------

function isMoonUP(time, date) {
    const moon = time;
    const moondate = date;
    if (time <= 7) {
        console.log("Cholo aj tumi r ami chad deki");
    }
    else if ( date <= 30) {
        console.log("ay month a chad deka onakk moja ");
    }
    else{
        console.log("tor sate ami kono din chad dekbo na");
    }
    return moon, moondate;
}
const day = 8;
const date = 30;
const chad = isMoonUP(day,date);
console.log(chad);


// odd and even number ber korar upay:------------------------------------------------

function isoddEven(number) {
    const num = number % 2;
    if (num === 0) {
        console.log("Number is a odd Numbers");
        // return true;
    }
    else{
        console.log("Number is a even Numbers");
        // return false;
    }
    return num;
}
const inputnum = 449;
const finalresult = isoddEven(inputnum);
console.log(finalresult);



// Number and index ak sate ber korar jonno :---------------------------------------

function getSunOfArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
         const index = i ;
        const element = numbers[index];
        console.log(index, element);
        
    }
}
const myNumber = [23, 44, 55, 35, 66, 77, 87,12];
getSunOfArray(myNumber);




// index, array and sum akjust kora:---------------------------------

function getElenemtSum(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;     
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [45, 56, 33, 56, 36, 66, 64, 33, 67, 22, 23];
getElenemtSum(myNumbers);