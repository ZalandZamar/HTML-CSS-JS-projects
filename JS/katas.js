/*
function replace(s) {
  //coding and coding....
  
  return s.replace(/[aeiouAEIOU]/g, "!");}

console.log(replace("hello"))
console.log(replace("ooooo"))
*/

/*
function parseF(s) {
  const regex = /^-?\d+(\.\d+)?$/;
  return  Number(s) ? s.toString() : null;
}
console.log(parseF("1"));
*/

/*
function move (position, roll) {
  // return the new position
  return position + (roll * 2);
}

console.log(move(6,3));
*/

/*
function binToDec(bin) {
  // TODO
  let sum = 0;
    const digits = String(bin).split('').map((num) => {
    const number = Number(num);
    const power = number ** 2;
     sum += power;
  });

  return sum;
}

console.log(binToDec(10101));
*/

/*
function binToDec(bin) {
  // TODO
  let sum = 0;
  let digits;
    digits = String(bin).split('').map((num, index, arr) => {
    const reversed = arr[arr.length - 1 - index];
    const i = index;    
    const number = Number(reversed * (2 ** (i)));
    sum += number;
  });

  return sum;
}

console.log(binToDec(10110101));
*/

/*
function squareOrSquareRoot(array) {
  return array.map((number) => {
    if(number < 0) {
      return;
    } 
    
    if(number === "") {
      return;
    }
    
    if(number === null) {
      return;
    }
    
    const squareRoot = Math.sqrt(number);
    
    if(Number.isInteger(squareRoot)) {
      return squareRoot;
    } else {
      return number ** 2;
    }
  }); 
}

console.log(squareOrSquareRoot([7,25]));
*/

/*
function stringy(size) {
  if (!Number.isInteger(size) || size < 0) {
    return;
  }
  
  return String(size)
    .split("")
    .map((_, i, array) => {
       if (i !== 0) {
        
      } else {
        return 1;
      }
    })
    .join("")
}

console.log(stringy(2));
*/

/*
function hexToDec(hexString) {
  let sum = 0;
  const isNegative = hexString[0] === "-"; // Check if it's a negative number
  if (isNegative) {
    hexString = hexString.slice(1); // Remove the negative sign for further processing
  }

  const array = hexString.split("").reverse();
  array.forEach((num, i, arr) => {
    if(num === "A" || num === "a") {
      arr[i] = 10;
    } else if(num === "B" || num === "b") {
      arr[i] = 11;
    } else if(num === "C" || num === "c") {
      arr[i] = 12;
    } else if(num === "D" || num === "d") {
      arr[i] = 13;
    } else if(num === "E" || num === "e") {
      arr[i] = 14;
    } else if(num === "F" || num === "f") {
      arr[i] = 15;
    } else {
      arr[i] = Number(num); // For digits 0-9
    }

    // If it's negative, apply negative sign when multiplying
    const number = isNegative ? -arr[i] * (16 ** i) : arr[i] * (16 ** i);
    sum += number;
  });

  return sum;
}

console.log(hexToDec("1F3")); // Positive number
console.log(hexToDec("-1F3")); // Negative number
console.log(hexToDec("A2B")); // Positive number
console.log(hexToDec("-A2B")); // Negative number
*/

/*
function sumArray(array) {
  if(!Array.isArray(array) || array.length <= 1) {
     return 0;
     }
  
  let sum = 0;
  let largestNumber = array[0];
  let smallestNumber = array[0];
  for(let i = 1; i < array.length; i++) {
    if(array[i] > largestNumber) {
      largestNumber = array[i];
    } else if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }

  const largeSmall = largestNumber + smallestNumber;
  array.forEach((num) => {
    sum += num;
  });
  
  return sum - largeSmall;;
}

console.log(sumArray([1,12,13,5000]));
*/

/*
function fakeBin(x) {
  if (x === "") {
    return;
  }

  return x.split("").map(num => num < "5" ? "0" : "1").join("");

  /*
  return x.split("").map((num) => {
     return  num < "5" ? "0" : "1";
  }).join("");
}

console.log(fakeBin("3456")); // Output: "0011"
console.log(fakeBin("123456789")); // Output: "000011111"
*/

/*
function powersOfTwo(n){
  if(Number.isInteger(n) < 0) {
    return;
  }
  
  const array = [];
  let result;
  const number = n;
  
  for (let i = 0; i <= number; i++) {
     result = 2 ** i; 
     array.push(result);
  }

  return array;
}

console.log(powersOfTwo(5));
*/

/*
function howMuchILoveYou(nbPetals) {
  // your code
if(nbPetals < 0) {
  return;
}

const array = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all"
];

let value = array[(nbPetals - 1) % array.length];

value.repeat(nbPetals);

return value;
}

console.log(howMuchILoveYou(13));
*/

/*
function reverseWords(str){
  const array = str.split(" ");
   
  const string = array.reverse().join(" ");

  return String(string);
}

console.log(reverseWords("hello World"));
*/

/*
function distinct(a) {
  return a.filter((element, index, arr) => {
    return arr.indexOf(element) === index;
  });
}

console.log(distinct([1,2,3,4,2,4,1,1,1,1,1]));
function distinct(arr) {
  let res = []; 
  
  for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i]);
    }
}
return res;
}
*/

/*
function points(games) {
  let point = 0;

  games.forEach((element) => {
    const match = element.split(":").map(Number); // Convert to numbers

    if (match[0] > match[1]) {
      point += 3;
    } else if (match[0] < match[1]) {
      point += 0;
    } else {
      point += 1;
    }
  });

  return point;
}

console.log(points(["2:1", "5:2"])); // Output: 3
console.log(points(["2:2", "1:3", "4:1"])); // Output: 4
*/

/*
function grow(x){
  let sum = 0;
 return x.reduce((acc, el) => {
    return acc * el;
  });
}

function grow(x){
  let sum = 1;
  x.map((el) => {
     sum *= el;
  });

  return sum;
}
console.log(grow([1,2,3,2]));
*/

/*
function findAverage(array) {
  // your code here
  if(array.length === 0) {
    return 0;
  }
  
  let sum = 0;
  array.map((el) => {
    sum += el;
  });
  
  return sum/ array.length;
}

console.log(findAverage([10,10,20,20]));
*/

/*
var summation = function (num) {

  if(num <= 0) {
    return;
  }
  // Code here
  let sum = 0;
  let math = 0;
  for(let i = 0; i < num; i++) {
    sum += i;

    math = sum + num;
  }

  return math;
}

console.log(summation(8));
*/

/*
function squareSum(numbers){
  let sum = 0;
   numbers.map((el) => {
    const square = (el ** 2);
    sum += square;
  });
  
  return sum;
}
  */

/*
function expressionMatter(a, b, c) {
  let largest = Math.max(a,b,c);
  let smallest = Math.min(a,b,c);
  let largeSmall = largest + smallest;
  let all = a + b + c;
  let medium = all - largeSmall;

  if((medium + smallest) * largest > largest* smallest * medium) {
    return (medium + smallest) * largest;
  } else {
    return largest * smallest * medium;
  }
}

console.log(expressionMatter(5, 6, 1));
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,      // Sum of all
    a * b * c,      // Product of all
    (a + b) * c,    // Adding first two, then multiplying
    a * (b + c),    // Multiplying first, then adding
    (a + c) * b     // Adding first and last, then multiplying but the creater of the kata has missed this
  );
}

console.log(expressionMatter(6, 7, 1)); // 49
*/

/*
function isPalindrome(x) {
  const regex = x.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const palindrome = regex.split("").reverse().join(""); 
  if (regex === palindrome) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("mADaM"));
 */

/*
function dateNbDays(a0, a, p) {
	// your code
  const logarithm = Math.log(a / a0);
  const days = Math.log(p / 100 / 360);
  const result = logarithm / Math.log(days);

  const date = new Date(Date.UTC(2016, 0, 1)); 
  const setDate = date.setDate(date.getDate() + Math.ceil(result));
  return date.toISOString().split("T")[0]; // Outputs: "YYYY-MM-DD"
}

console.log(dateNbDays(9999, 11427, 6));

function dateNbDays(a0, a, p) {
  // Convert the interest rate to a daily rate
  const dailyRate = p / 100 / 360;
  
  // Calculate the number of days required for the amount to reach or exceed `a`
  const days = Math.log(a / a0) / Math.log(1 + dailyRate);

  // Set the starting date as January 1, 2016
  const startDate = new Date(Date.UTC(2016, 0, 1));

  // Add the calculated number of days to the start date
  startDate.setUTCDate(startDate.getUTCDate() + Math.ceil(days));

  // Return the date in "YYYY-MM-DD" format
  return startDate.toISOString().split("T")[0];
}

// Test cases
console.log(dateNbDays(100, 101, 0.98)); // "2017-01-01"
console.log(dateNbDays(100, 150, 2.00)); // "2035-12-26"
*/

/*
function gps(s, x) {
  // your code
  let currVal = 0;
  let newArr = [];

  if(x.length <= 1) {
    return 0;
  }

  for(let i = 0; i < x.length - 1; i++) {
    const value = x[i + 1] - x[i];
    currVal = (3600 * value) / s;
    newArr.push(currVal);
  }
  
  console.log(newArr);
  let maxValue;
  newArr.forEach((el) => {
    maxValue = Math.max(...newArr);
  });
  //return 3600 * (0.44- 0.02) / s; 
  return Math.floor(maxValue);
  
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));
*/

/*
function partlist(arr) {
  // your code
  // evrey problem feels like alot at first but then you break it down and then you solve it then 
  // you are like yes i am the man!!!
  const newArray = [];
  let brandArray = [];
  for(let i = 0; i < arr.length - 1; i++) {
    newArray.push(arr[i]);
    const restOfArray = arr.slice(i + 1);
    //console.log(restOfArray);
    
    //console.log(newArray);
    const firstString = [...newArray].join(" ");
    const lastString = restOfArray.join(" ");
    
    brandArray.push([ firstString, lastString]);
    //console.log(arr[i]);
    
  }
  return brandArray;
  
}

//console.log(partlist(["hello", "greatness", "are", "you ", "ready"]));

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
*/

/*
function makeValley(arr) {
  const rightWing = [];
  const leftWing = [];

  if((arr.length + 1) % 2 === 0) {
    const sorted = arr.sort((a,b) => b - a);
    for(let i = 0; i < sorted.length; i += 2) {
      leftWing.push(sorted[i]);
    }

    for(let i = 1; i < sorted.length; i += 2) {
      rightWing.push(sorted[i]);
  }

    leftWing.sort((a,b) => b - a);
    rightWing.sort((a,b) => a - b);
    return leftWing.concat(rightWing);

  } else {
     let middleNumber = Math.floor((arr.length / 2));

    //arr.splice(middleNumber, 1);
    //console.log(arr);
    const sorted = arr.sort((a,b) => b - a);
    //console.log(sorted);
    

    for(let i = 1; i < sorted.length; i += 2) {
      rightWing.push(sorted[i]);
    }

    for(let i = 0; i < sorted.length; i += 2) {
      leftWing.push(sorted[i]);
  }

  //rightWing.unshift(arr[middleNumber]);
  leftWing.sort((a,b) => b - a)
  rightWing.sort((a,b) => a - b)
  return leftWing.concat(rightWing);
  } 
}

function makeValley(arr) {
  const rightWing = [];
  const leftWing = [];

  const sorted = [...arr].sort((a, b) => b - a); // Sort descending

  for (let i = 0; i < sorted.length; i += 2) {
    leftWing.push(sorted[i]);  // Every 1st, 3rd, 5th, etc.
  }

  for (let i = 1; i < sorted.length; i += 2) {
    rightWing.push(sorted[i]); // Every 2nd, 4th, 6th, etc.
  }

  return leftWing.concat(rightWing.reverse()); // Reverse right wing for correct valley shape
}

console.log(makeValley([1,2,3,4,5,6,7,8,9]));
console.log(makeValley([1,2,3,4,5,6,7,8]));
*/

/*
function squarePi(digits){
  const pi = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  let sum = 0;
  const piArr = pi.split("");

  for(let i = 0; i < digits; i++) {
    const values = piArr[i];
    const squareValues  = values ** 2;
    sum += squareValues;
  }
  
  return Number.isInteger(Math.sqrt(sum)) ? Math.ceil(Math.sqrt(sum)) 
    : Math.floor(Math.sqrt(sum) + 1);
}

//console.log(squarePi(5));
console.log(squarePi(10))
*/

/*
function movie(card, ticket, perc) {
  var costA = n = 0,
      costB = card;
  while (Math.ceil(costB) >= costA) {
      costA += ticket;
      costB += ticket * Math.pow(perc,++n);
  }
  return n;
};
*/

/*
function sumin(n) {
   // or any value of n
   let sum = 0;
  const pairs = Array.from({ length: n }, (_, x) => 
    Array.from({ length: n }, (_, y) => [x + 1, y + 1])
  ).reduce((acc, item) => acc.concat(item), []);;
  //console.log(pairs);

  pairs.forEach((el) => {
    //console.log(el);
    const sorted = el.sort((a, b) => a - b);
    sum += sorted[0];
  });

  return sum;
}
console.log(sumin(15))
function sumax(n) {
  // your code
  let sum = 0;
  const pairs = Array.from({ length: n }, (_, x) => 
    Array.from({ length: n }, (_, y) => [x + 1, y + 1])
  ).reduce((acc, item) => acc.concat(item), []);
  //console.log(pairs);

  pairs.forEach((el) => {
    //console.log(el);
    const sorted = el.sort((a, b) => b - a);
    sum += sorted[0];
  });

  return sum;
}

console.log(sumax(3))
function sumsum(n) {
  // your code
  const minimum = sumin(n);
  const maximum = sumax(n);

  return minimum + maximum
}

console.log(sumsum(8));

function sumin(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

function sumax(n) {
  return sumin(n) + (n * (n + 1)) / 2;
}

function sumsum(n) {
  return sumin(n) + sumax(n);
}

console.log(sumax(8))  // Works efficiently
*/

/*
function numbersWithDigitInside(x, d) {
  
  if(x < d) {
    return [0, 0, 0]
  }

  if(x === 1) {
    return [0, 0, 0]
  }
  const indexArray = [];
  const finalArray = [];
  let numbersCount = 0;
  let numbersSum = 0;
  let numbersProduct = 1;

  const array = String(x).split("");
  for(let i = 1; i <= x; i++) {
    indexArray.push(String(i));
  }

  const targetArray =indexArray.filter((el) => el.includes(String(d)));

  console.log(targetArray);

  for(let i = 0; i < targetArray.length; i++) {
    numbersCount++;
    numbersSum += Number(targetArray[i]);
    numbersProduct *= Number(targetArray[i]);
  }

  finalArray.push(numbersCount, numbersSum, numbersProduct);

  if(finalArray.length === 0) {
    return [0, 0, 0]
  }

  return finalArray;
}

console.log(numbersWithDigitInside(1, 0));
*/

/*
function potatoes(p0, w0, p1) {
  const dryMatter = ((100 - p0) / 100) * w0;
  const w1 = dryMatter / ((100 - p1) / 100);
  return Math.floor(w1);
}

console.log(potatoes(82, 127, 80));
*/

/*
function evaporator(content, evap_per_day, threshold){ 
  const newContent = (content / 100) * threshold;
  
    let increm = 0;
    for (let i =0; content > newContent; i++) {
      let evaporte = (content * evap_per_day) / 100;
      content -= evaporte;
      increm++;
    }

    return increm;
}
console.log(evaporator(10,10,1));
*/

/*
function getMinMax(arr){
  const sorted = arr.sort((a, b) => a - b);

  const minimum = sorted[0];
  const maximum = sorted[sorted.length - 1];
  const minmax = [minimum, maximum];

  return minmax;
};

console.log(getMinMax([15,12,34,132,78]));
*/

/*
function containAllRots(strng, arr) {
  const string = strng.split("");
  const newArray = [];
  
  for(let i = 0; i < strng.length; i++) {
    const sliced = string.splice(0, 1);
    string.push(sliced[0]);
    const st = string.join("");
    newArray.push(st);
  }
  
  let isTrue = true;
  newArray.forEach((el) => {
    if(!arr.includes(el)){
      isTrue = false;
      return;
    }
  });

  return isTrue;
}

console.log(containAllRots("abc", ["bca", "cab", "abc",'hjgf']));
*/

/*
function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a,b) => a-b);
  return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNumbers([1,21,50,23,12,56,13]))
*/

/*
function lostSheep(friday,saturday,total){
  let fridaySum = 0;
  let saturdaySum = 0;
  
  for(let i = 0; i < friday.length; i++) {
    fridaySum += friday[i];
  }

  for(let i = 0; i < saturday.length; i++) {
    saturdaySum += saturday[i];
  }

  const allSheep = fridaySum + saturdaySum;
  
  return total - allSheep;
}

console.log(lostSheep([1,2,3], [1,2,3], 15));
*/

/*
function isLeapYear(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

console.log(isLeapYear(2020));
*/

/*
function removeNoise(str){
  const regex = /[%$&\/#·@|º\\ª]/g;
  return str.replace(regex, "")
}

console.log(removeNoise("h%e&·%$·llo w&%or&$l·$%d"));
*/

/*
function maxMultiple(divisor, bound){
  const array = [];
  for(let i = 1; i <= bound; i++) {
    if(i % divisor === 0) {
      array.push(i);
    }
  }
  array.sort((a, b) => b - a);
  
  return array [0];
}

console.log(maxMultiple(10, 50));
*/

/*
function toInitials(name) {
 const element = name.split(" ");
 const array = [];

  element.forEach((el) => {
    const element = `${el[0]}.`;
    array.push(element)
  });

  const string = array.join(" ")
  return string;
}

console.log(toInitials("Bill Gates"))
*/

/*
function plant(seed, water, fert, temp){
  const string =`${"-".repeat(water)}${seed.repeat(water)}`;

  if(temp < 20 || temp > 30) {
    return `${"-".repeat(water * fert)}^`;
  }

  if(water === 1) {
    return `-${seed.repeat(fert)}`
  }

  if(temp >= 20 && temp <= 30) {
    const result = `
      ${string.repeat(fert)}
    `;
    return result;
  }
  
 }

 console.log(plant("&", 2, 5, 12));
 */

 /*
 function maxGap (numbers){
  const array = [];
  const sorted = numbers.sort((a, b) => a - b);
  
  for(let i = 0; i < sorted.length - 1; i++) {
    array.push(sorted[i + 1] - sorted[i]);
  }

  return Math.max(...array)
 }

 console.log(maxGap([12,3,81,2,11,10]));
 */

 /*
 function encode(str,  n) {
  const array = str.split("");
  const lettersCount = [ 
    {"char": "a", "number": 1},
    {"char": "b", "number": 2},
    {"char": "c", "number": 3},
    {"char": "d", "number": 4},
    {"char": "e", "number": 5},
    {"char": "f", "number": 6},
    {"char": "g", "number": 7},
    {"char": "h", "number": 8},
    {"char": "i", "number": 9},
    {"char": "j", "number": 10},
    {"char": "k", "number": 11},
    {"char": "l", "number": 12},
    {"char": "m", "number": 13},
    {"char": "n", "number": 14},
    {"char": "o", "number": 15},
    {"char": "p", "number": 16},
    {"char": "q", "number": 17},
    {"char": "r", "number": 18},
    {"char": "s", "number": 19},
    {"char": "t", "number": 20},
    {"char": "u", "number": 21},
    {"char": "v", "number": 22},
    {"char": "w", "number": 23},
    {"char": "x", "number": 24},
    {"char": "y", "number": 25},
    {"char": "z", "number": 26}
  ];  

  let newArray = [];

  array.forEach((el) => {
    lettersCount.forEach((num) => {
      if(el === num.char) {
        newArray.push(num.number);
      }
    });
  });

  const digits = String(n).split("");
  
  let digit = 0;
  const nArray = [];
  while(digit < newArray.length) {
    digits.forEach((el) => {
      if(digit < newArray.length){
      nArray.push(el);
      digit++;
      }
    });
  }
  
  const greaterArray = newArray.map((el, i) => Number(el) + Number(nArray[i] || 0));

  console.log(newArray)
  return greaterArray;
}

console.log(encode("scouts", 1939));
*/

/*
function isIsogram(str){

  const string = str.toLowerCase().split("");

  const result = string.some(element => string.filter(el => el === element).length > 1); 
  return result ? false : true;
}

console.log(isIsogram("abcd"))
*/

/*
function addingShifted (arrayOfArrays, shift) {
  let sum = new Array(arrayOfArrays[0].length + 10000000).fill(0);

  arrayOfArrays.forEach((el, index) => {
    if(el !== arrayOfArrays[0]) {
      el.unshift(...new Array(index * shift).fill(0)); 
    }
  })
 
    arrayOfArrays.forEach((element) => {
      element.forEach((ele, index) => {
        sum[index] += ele;
      });
    });

    while (sum[sum.length - 1] === 0) {
      sum.pop();
    }
  
    return sum;
}

console.log(addingShifted([[0],[0,1]], 3));
*/

/*
function alternate(n, firstValue, secondValue){
  const array = [];
  for(let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue);
  }

  return array;
}

alternate(8, "true", "false");
*/

/*
function replaceNth(text, n, oldValue, newValue) {
  if(n <= 0) {
    return text;
  }
  
  const result = text.split("");
  let counter = 0;
  for(let i = 0; i < result.length; i++) {
    if(result[i] === oldValue) {
      counter++;
      if(counter % n === 0) {
        result[i] = newValue;
      } 
    }  
  }

  return result.join("");
}

console.log(replaceNth("Vader said: No, I am your father!", -2, "a", "o"));
*/

/*
function countSalutes(hallway) {
  const Output = hallway.split("");
  
  let array = [];
  let counts = 0;
  let count = 0;
  for(let i = 0; i < Output.length; i++) {
    if(Output[i] === ">" || Output[i] === "<") {
      counts = Output[i];
      array.push(counts)
  }  
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === '>') {
    // When '>' is found, check if there are any '<' after it
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === '<') {
        count++;
      }
    }
  }
}

return count * 2;
}

countSalutes(">----->-----<--<")
countSalutes("<---<--->----<")
countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->')

function countSalutes(hallway) {
  let s=0, right=0;
  for(let c of hallway){
    if(c=='>')      right++;
    else if(c=='<') s+=right;
  }
  return 2*s;
}
*/

/*
function getTheVowels (word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let currentVowelIndex = 0; 
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (letter === vowels[currentVowelIndex]) {
      count++;
      currentVowelIndex = (currentVowelIndex + 1) % 5;
    }
  }

  return count;
}
*/

/*
function addLetters(...letters) {

  const [first, ...rest] = letters; 
  if (first === undefined) return "z"; 

  const lettersCount = [ 
    {"char": "a", "number": 1},
    {"char": "b", "number": 2},
    {"char": "c", "number": 3},
    {"char": "d", "number": 4},
    {"char": "e", "number": 5},
    {"char": "f", "number": 6},
    {"char": "g", "number": 7},
    {"char": "h", "number": 8},
    {"char": "i", "number": 9},
    {"char": "j", "number": 10},
    {"char": "k", "number": 11},
    {"char": "l", "number": 12},
    {"char": "m", "number": 13},
    {"char": "n", "number": 14},
    {"char": "o", "number": 15},
    {"char": "p", "number": 16},
    {"char": "q", "number": 17},
    {"char": "r", "number": 18},
    {"char": "s", "number": 19},
    {"char": "t", "number": 20},
    {"char": "u", "number": 21},
    {"char": "v", "number": 22},
    {"char": "w", "number": 23},
    {"char": "x", "number": 24},
    {"char": "y", "number": 25},
    {"char": "z", "number": 26}
  ];  

  let newArray = [];
  let character;
  let sum = 0;

  letters.forEach((el) => {
    lettersCount.forEach((num) => {
      if(el === num.char) {
        newArray.push(num.number);
      }
    });
  });
  
  newArray.forEach((el) => {
    sum += el;
  });

  if(sum > 26) {
    sum = (sum - 1) % 26 + 1;
  lettersCount.forEach((el) => {
    if(el.number === sum) {
      character = el.char
    }
  });
  } else {
    lettersCount.forEach((el) => {
      if(el.number === sum) {
        character = el.char
      }
    });
  }
  
  return character;
}

console.log(addLetters("a", "b", "z", 'v',"d"));
*/

/*
function averages(numbers) {
  if(numbers.length === 1 || numbers.length === 0) {
    return [];
  } else if(!numbers) {
    return []
  }
  const array = [];
  const newArray = [];
  
  for(let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    array.push(sum)
  }
  
  array.forEach((el) => {
    newArray.push(el / 2)
  });

  return newArray;
  
}

averages([2, 2, 2, 2, 2]);
*/

/*
function minValue(values){
  const array = []
  
  values.forEach(element => {
    if(array.indexOf(element) === -1) {
      array.push(element)
    } 
  });

  array.sort((a, b) => a - b)
  const result = array.join("")
  return Number(result)
}

minValue([1, 3,3,3,3, 1,1,1,1,1])
*/

/*
function lastSurvivor(letters, coords) {
  const array = letters.split("");
  for(let i = 0; i < coords.length; i++) {
    array.splice(coords[i],1)
  }
  
  console.log(array);
  
}

lastSurvivor("abcda", [4,3,2,1])
*/

/*
function filterString(value) {
  const result = value.split("").filter((el) => Number.isInteger(Number(el)));
  return Number(result.join(""));
}

console.log(filterString("12hel2o4"));
*/

/*
function highAndLow(numbers){
  const numbersArray = numbers.split(" ").map(Number);
  const array = [];
  
  const sorted = numbersArray.sort((a, b) => b - a);
  console.log(sorted);
  const largest = sorted[0];
  const smallest = sorted[sorted.length - 1];

  array.push(largest, smallest);
  return array.join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
*/

/*
function findShort(s){
  const array = s.split(" ");
  let maxLength = array[0].length;
let index = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i].length < maxLength) {
    maxLength = array[i].length;
    index = i;
  }
}
  return maxLength;
}

console.log(findShort("Let's travel abroad shall we"));
*/

/*
function longest(s1, s2) {
  const sum = s1 + s2;
  const result = [...new Set(sum)].join("");
  const sorted = result.split("").sort().join("");
  return sorted;  
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
*/

/*
function accum(s) {
  const array = [];
	for(let i = 0; i < s.length; i++) {
    const result = s[i].repeat(i + 1) + "-";
    const result2 = result.toLowerCase();
    const upperCase = result2.charAt(0).toUpperCase() + result2.slice(1);
    
    array.push(upperCase);
  }
  
  const newArray = array.join("").split("");
  newArray.splice(newArray.length - 1, 1);
  return newArray.join("");
}

console.log(accum("ZpglnRxqenU"));
*/

/*
function solution(pairs){
  return Object.entries(pairs).map(([Key, value]) => {
    return `${Key} = ${value}`;
  }).join(",")
}

console.log(solution({a: 1, b: '2'}));
*/

/*
function mxdiflg(a1, a2) {
  if(a1.length === 0 || a2.length === 0) {
    return -1;
  }
  
  let a1MaxLength = a1[0].length;
  let a1MinLength = a1[0].length;

  for(let i = 0; i < a1.length; i++) {
    if(a1[i].length > a1MaxLength) {
      a1MaxLength = a1[i].length
    } else if(a1[i].length < a1MinLength) {
      a1MinLength = a1[i].length;
    }
  }

  let a2MaxLength = a2[0].length;
  let a2MinLength = a2[0].length;

  for(let i = 0; i < a2.length; i++) {
    if(a2[i].length > a2MaxLength) {
      a2MaxLength = a2[i].length;
    } else if(a2[i].length < a2MinLength) {
      a2MinLength = a2[i].length
    }
  }

  return a1MaxLength - a2MinLength > a2MaxLength - a1MinLength ? a1MaxLength - a2MinLength : a2MaxLength - a1MinLength;
}

console.log(mxdiflg( ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));
*/

/*
function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map(digit => digit ** 2)
      .join("")
  );
}

console.log(squareDigits(765)); 
*/

/*
function swap (string) {
  const wovel = ["a","e","i","o","u"];
  const array = string.split("");
  return array.map((el, i) => {
    return wovel.includes(el) ? el.toUpperCase() : el;
  }).join("");
}
*/

/*
function rowSumOddNumbers(n) {
  const array = [];
  let add = -1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      add += 2;
      row += add + " ";
    }
    array.push(row.trim())
  }

  const result = array[n - 1].split(" ").map(Number);
  let sum = 0;

  result.map((el) => {
    sum += el;
  })

  return sum;
}

rowSumOddNumbers(42);
*/

/*
function dontGiveMeFive(start, end) {
  const array = [];
  for(let i = start; i <= end; i++) {
    array.push(String(i));
  }

  return array.filter((element) => !element.includes(5)).length;
}

console.log(dontGiveMeFive(4, 17))
*/

/*
function maxTriSum(numbers){
  const filterd = [...new Set(numbers)]
  return filterd.sort((a , b) => b - a).reduce(() => {
    return filterd[0] + filterd[1] + filterd[2];
  });
}

console.log(maxTriSum([3,2,6,8,2,3]));
*/

/*
function flattenAndSort(array) {
  const mainArray = array.reduce((acc, el) => acc.concat(el), []);
  return mainArray.sort((a, b) => b - a);
}
flattenAndSort([[1, 3, 4], [5, 8, 1], [9, 1, 2, 5]]);
*/

/*
function descendingOrder(n){
  return String(n).split("").sort((a, b) => b - a).join("");
}

console.log(descendingOrder(123456789));
*/

/*
function getCount(str) {
  const stringArray = str.split("");
  const wovel = ["a","e","i","o","u"];
  let count = 0;

   stringArray.map((element) => {
    if(wovel.includes(element)) {
      count++;
    }
  });
  
  return count;
}

console.log(getCount("hello wooorld"));
*/

/*
function replaceAll(seq, find, replace) {
  if(Array.isArray(seq)) {
  for(let i = 0; i < seq.length; i++) {
    if(seq[i] === find) {
      seq[i] = replace;
    }
  }
  
  return seq;
} else {
  const array = seq.split("");
  for(let i = 0; i < array.length; i++) {
    if(array[i] === find) {
      array[i] = replace;
    }
  }
  
  return array.join("");
}
}

console.log(replaceAll([2,1,2,], 1, 2));
*/

/*
function isInMiddle(str) {
  if(str.length % 2 !== 0) {
  const seq = str.split("")
  const abc = Math.floor(seq.length / 2) - 1;
  if(seq[abc] === "a" && seq[abc + 1] === "b" && seq[abc + 2] === "c") {
    return true;
  } else {
    return false;
  } 
} else if(str.length % 2 === 0) {
  const seq = str.split("");
  const abc1 = Math.floor(seq.length / 2) - 2;
  const abc2 = Math.floor(seq.length / 2) - 1;
  
  if(seq[abc1] === "a" && seq[abc1 + 1] === "b" && seq[abc1 + 2] === "c" || seq[abc2] === "a" && seq[abc2 + 1] === "b" && seq[abc2 + 2] === "c") {
    return true;
  } else {
    return false;
  }
}
}

console.log(isInMiddle("123123abc1234"))
*/

/*
function moveVowel(input) {
  const array = input.split("");
  const wovel = ["a", "e", "i", "o", "u"];
  const newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if(wovel.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  const result = array.filter((el) => !wovel.includes(el));

  return result.concat(newArray.reverse()).join("");
  
}

console.log(moveVowel("aeiuo12"));
*/

/*
function solution (roman) {
  const romanNumeral = [
    { number: 1000, symbol: "M" },
    { number: 900, symbol: "CM" },
    { number: 500, symbol: "D" },
    { number: 400, symbol: "CD" },
    { number: 100, symbol: "C" },
    { number: 90, symbol: "XC" },
    { number: 50, symbol: "L" },
    { number: 40, symbol: "XL" },
    { number: 10, symbol: "X" },
    { number: 9, symbol: "IX" },
    { number: 5, symbol: "V" },
    { number: 4, symbol: "IV" },
    { number: 1, symbol: "I" }
  ];

  const array = roman.split("");
  let integer = 0;

  for(let i = 0; i < array.length; i++) {
    const currentValue = romanNumeral.find(item => item.symbol === array[i]).number;
    const nextValue = romanNumeral.find(item => item.symbol === array[i + 1])?.number || 0;

    if(currentValue < nextValue) {
      integer -= currentValue;
    } else {
      integer += currentValue;
    }
  }
  return integer;
}

console.log(solution('IV'));
*/

/*
function toCamelCase(str){
  const string = str.split(/[-_]/);
 
  const newString = string.reduce((acc, el, i) => {
    if(i === 0) return el
    const element = el[0].toUpperCase() + el.slice(1);
    return acc + element;
  }, "")
  console.log(newString);
  
}

console.log(toCamelCase("the-stealth_warrior"))
*/

/*
function race(v1, v2, g) {
  const totalSeconds = Math.floor((g / (v2 - v1)) * 3600);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;;
 
 return [hours, minutes, seconds];
}

console.log(race(80, 91, 37));
*/

/*
function tribonacci(signature,n){
  if(n < signature.length) {
    return signature.slice(0, n);
  }

  for(let i = 0; i < signature.length; i++) {
    if(signature.length < n) {
      const sum = signature[i] + signature[i + 1] + signature[i + 2];
      signature.push(sum);
    }
  }

  return signature;
}

console.log(tribonacci([1,2,1], 1));
*/

/*
function Xbonacci (signature,n){
  if(n < signature.length) {
    return signature.slice(0, n);
  }

  const length = signature.length;
  
  for(let i = 0; i< signature.length; i++) {
    if(signature.length < n) {
      const result = signature.slice(-length);
      const sum = result.reduce((acc, el) => acc += el);
      signature.push(sum);
    }
  }

  return signature;
}

console.log(Xbonacci ([1,1,1,1,1], 10));
*/

/*
function sequenceClassifier(arr) {
  let increasing = true;
  let strictlyIncreasing = true;
  let decreasing = true;
  let strictlyDecreasing = true;
  let constant = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      decreasing = false;
      strictlyDecreasing = false;
      constant = false;
    } else if (arr[i] > arr[i + 1]) {
      increasing = false;
      strictlyIncreasing = false;
      constant = false;
    } else {
      strictlyIncreasing = false;
      strictlyDecreasing = false;
    }
  }

  if (constant) return 5;
  if (strictlyIncreasing) return 1;
  if (increasing) return 2;
  if (strictlyDecreasing) return 3;
  if (decreasing) return 4;
  return 0;
}

console.log(sequenceClassifier([3,5,8,1,14,3]))
*/

/*
decodeMorse = function(morseCode) {
  const morseCodeArray = [
    { code: ".-", char: "A" },
    { code: "-...", char: "B" },
    { code: "-.-.", char: "C" },
    { code: "-..", char: "D" },
    { code: ".", char: "E" },
    { code: "..-.", char: "F" },
    { code: "--.", char: "G" },
    { code: "....", char: "H" },
    { code: "..", char: "I" },
    { code: ".---", char: "J" },
    { code: "-.-", char: "K" },
    { code: ".-..", char: "L" },
    { code: "--", char: "M" },
    { code: "-.", char: "N" },
    { code: "---", char: "O" },
    { code: ".--.", char: "P" },
    { code: "--.-", char: "Q" },
    { code: ".-.", char: "R" },
    { code: "...", char: "S" },
    { code: "-", char: "T" },
    { code: "..-", char: "U" },
    { code: "...-", char: "V" },
    { code: ".--", char: "W" },
    { code: "-..-", char: "X" },
    { code: "-.--", char: "Y" },
    { code: "--..", char: "Z" },
    { code: "-----", char: "0" },
    { code: ".----", char: "1" },
    { code: "..---", char: "2" },
    { code: "...--", char: "3" },
    { code: "....-", char: "4" },
    { code: ".....", char: "5" },
    { code: "-....", char: "6" },
    { code: "--...", char: "7" },
    { code: "---..", char: "8" },
    { code: "----.", char: "9" },
    { code: "...---...", char: "SOS" },
    { code: "-.-.--", char: "!" },
    { code: ".-.-.-", char: "." },
  ];

  const words = morseCode.trim().split("   ");

  const translatedWords = words.map(word => {
    const letters = word.split(" "); 
    return letters.map(letter => {
      const found = morseCodeArray.find(item => item.code === letter);
      return found ? found.char : "";
    }).join(""); 
  });

  return translatedWords.join(" "); 

};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
*/

/*
function decToHex(number) {
  if (number < 0) number = 0;
  if (number > 255) number = 255;
  
  const hexString = number.toString(16).toUpperCase();
  return hexString.length < 2 ? "0" + hexString : hexString;
}

function rgb(r, g, b) {
  let R = decToHex(r);
  let G = decToHex(g);
  let B = decToHex(b);

  return `${R}${G}${B}`;
}

console.log(rgb(-20, -20, -20));
*/

/*
function squareDigitsSequence(a0) {
  let currentNumber = a0;
  const seenNumbers = new Set();
  
  while (!seenNumbers.has(currentNumber)) {
    seenNumbers.add(currentNumber);
   
    currentNumber = String(currentNumber)
      .split('')
      .map(digit => parseInt(digit) ** 2)
      .reduce((sum, square) => sum + square, 0);
  }

  return seenNumbers.size + 1;
  
}

squareDigitsSequence(16);
*/

/*
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }

  let longestStr = "";

  for (let i = 0; i <= strarr.length - k; i++) {
    const result = strarr.slice(i, i + k).join("");
    if (result.length > longestStr.length) {
      longestStr = result;
    }
  }

  return longestStr;
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
*/

/*
function comp(array1, array2){
  const newArr = [];
  
  let i = 0;
  array1.forEach((el) => {
    if(array2.includes(el ** 2)) {
      newArr.push(el);
      array2.splice(array2.indexOf(el ** 2), 1);
    }
  });

  return newArr.length === array1.length;
}

console.log(comp([7, 7], [49, 49, 43]));
*/

/*
function duplicateCount(text){
  const array = text.toLowerCase().split("").;
  const arr = [];
  let count = 0;

  for(let i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) !== i) {
      arr.push(array[i]);
    }
  }

  const newer = new Set(arr);
  return newer.size;
}

console.log(duplicateCount("aabbcde"));
*/

/*
const data1 =
"Rome:Jan 90.2,Feb 73.2,Mar 80.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 147.7,Nov 121.0,Dec 97.9" + "\n" +
"London:Jan 58.0,Feb 38.9,Mar 49.9,Apr 42.2,May 67.3,Jun 52.1,Jul 59.5,Aug 77.2,Sep 55.4,Oct 62.0,Nov 69.0,Dec 52.9" + "\n" +
"Paris:Jan 182.3,Feb 120.6,Mar 188.1,Apr 204.9,May 323.1,Jun 350.5,Jul 336.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
"NY:Jan 128.7,Feb 121.8,Mar 151.9,Apr 93.5,May 98.8,Jun 93.6,Jul 142.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
"Vancouver:Jan 155.7,Feb 121.4,Mar 132.3,Apr 69.2,May 85.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 69.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
"Sydney:Jan 123.4,Feb 111.0,Mar 151.3,Apr 129.7,May 123.0,Jun 159.2,Jul 102.8,Aug 90.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
"Bangkok:Jan 20.6,Feb 28.2,Mar 40.7,Apr 81.8,May 189.4,Jun 151.7,Jul 198.2,Aug 197.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
"Tokyo:Jan 59.9,Feb 81.5,Mar 106.4,Apr 139.2,May 144.0,Jun 186.0,Jul 155.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
"Beijing:Jan 13.9,Feb 14.7,Mar 18.2,Apr 18.4,May 43.0,Jun 88.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 38.0,Nov 19.3,Dec 2.7" + "\n" +
"Lima:Jan 11.2,Feb 10.9,Mar 10.7,Apr 10.4,May 10.6,Jun 11.8,Jul 14.4,Aug 13.1,Sep 23.3,Oct 1.7,Nov 0.5,Dec 10.7";

// Corrected version of mean function
function mean(town, strng) {
  if (!town || !strng) {
    console.error("Invalid input data.");
    return -1; // Return -1 or any other indication of invalid data
  }

  const cityData = strng.split("\n");
  const result = {};

  cityData.forEach(cityEntry => {
    const [city, monthsData] = cityEntry.split(":");

    const months = monthsData.split(",").reduce((acc, monthData) => {
      const [month, value] = monthData.split(" ");
      acc[month] = parseFloat(value);
      return acc;
    }, {});

    result[city] = months;
  });

  const average = result[town];
  if (!average) {
    console.error(`City "${town}" not found in the data.`);
    return -1;
  }

  let sum = 0;
  Object.values(average).forEach(val => {
    sum += val;
  });

  return sum / 12;
}

// Corrected version of variance function
function variance(town, strng) {
  if (!town || !strng) {
    console.error("Invalid input data.");
    return -1; // Return -1 or any other indication of invalid data
  }

  const cityData = strng.split("\n");
  const result = {};

  cityData.forEach(cityEntry => {
    const [city, monthsData] = cityEntry.split(":");

    const months = monthsData.split(",").reduce((acc, monthData) => {
      const [month, value] = monthData.split(" ");
      acc[month] = parseFloat(value);
      return acc;
    }, {});

    result[city] = months;
  });

  const average = result[town];
  if (!average) {
    console.error(`City "${town}" not found in the data.`);
    return -1;
  }

  let sum = 0;
  Object.values(average).forEach(val => {
    sum += val;
  });

  const meanValue = sum / 12;
  let variance = 0;

  Object.values(average).forEach(val => {
    variance += (val - meanValue) ** 2;
  });

  return variance / 12;
}

console.log(mean("London", data1));
console.log(variance("Beijing", data1));
*/

/*
function posAverage(s) {
  let count = 0;
  const array = s.split(",");
  const array2 = [];

  for(let i = 0; i < array.length; i++) {
    const cleaned = array[i].replace(/\s+/g, "");
    array2.push(cleaned);
  }
  
  let totalComparisons = 0;

  for (let k = 0; k < array2.length; k++) {
    for (let l = k + 1; l < array2.length; l++) {
      let matchingPositions = 0;
      for (let i = 0; i < array2[k].length; i++) {
        if (array2[k][i] === array2[l][i]) {
          matchingPositions++;
        }
      }

      count += matchingPositions;
      totalComparisons++;
    }
  }

  const totalLength = array2[0].length;  
  const averagePercentage = (count / (totalComparisons * totalLength)) * 100;
  
  return averagePercentage.toFixed(10);
}

console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));
*/

/*
function findUniq(arr) {
   const sorted = arr.sort((a, b) => b - a);
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
*/

/*
function result(n, p) {
  const array = String(n).split("");
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += Number(array[i]) ** p
    p += 1;
  }

  return sum;
}

function digPow(n, p){
  const sum = result(n, p);
  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(46288, 3));
*/

/*
function playPass(s, n) {
  const chars = s.toLowerCase().split("");
  const alphabet = Array.from({ length: 26}, (_, i) => String.fromCharCode(97 + i));
  const digits = Array.from({ length: 10}, (_, i) => i);

  for(let i = 0; i < chars.length; i++) {
    if(alphabet.includes(chars[i])) {
      let position = alphabet.indexOf(chars[i]);
      let newPosition = (position + n) % 26;
      chars[i] = alphabet[newPosition]  
    } 
     if(digits.includes(parseInt(chars[i]))) {
      chars[i] = 9 - chars[i];  
    }
  }

  for(let i = 0; i < chars.length; i += 2) {
    if(alphabet.includes(chars[i])) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  
  return chars.reverse().join("");
}

console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2));
console.log("4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");
*/

/*
function meeting(s) {
  const array = s.toUpperCase().split(";");  
  const newArray = [];
  
  array.forEach((el) => {
    const splited = el.split(":").reverse().join(", ");
    //console.log(splited);
    newArray.push(splited);
  });

  const sortedArray = newArray.sort()
  
  return sortedArray.map(item => `(${item})`).join('');
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
*/

function digitalRoot(n) {
  let array = String(n).split("");
  
  while(array.length > 1) {
    const result = array.reduce((acc, current) => {
      return Number(acc) + Number(current);
    }, 0);
    array = String(result).split("");
  }

  return Number(array);
}



console.log(digitalRoot(942));
