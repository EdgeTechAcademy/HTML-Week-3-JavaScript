let number = num =[12,42,67,70,67,21,38,97,105,11];
var ages = [14, 17, 11, 32, 33, 16, 40, 15, 4, 18, 912, 543, 33];

number.forEach(n => console.log(n));
let result;
result = num.filter(num => num < 65);
result.forEach(n => console.log(n));
let smallest = num.reduce((prev, n) => prev < n ? prev : n);
let biggest  = num.reduce((prev, n) => prev > n ? prev : n);
console.log ("The array has " + result.length + " numbers. Biggest Number is " + biggest + " Smallest Number is " + smallest);

console.log ("reduce -    " + ages.reduce((total, num) => total - num));
console.log ("reduce +    " + ages.reduce((total, num) => total + num));
console.log ("every       " + ages.every(age => age >= 18));
console.log ("includes    " + ages.includes(age => age >= 18));
console.log ("find        " + ages.find(age => age >= 18));
console.log ("includes    " + ages.includes(16));
console.log ("includes    " + ages.includes(16, 6));
console.log ("findIndex   " + ages.findIndex(age => age >= 18));
console.log ("some        " + ages.some(age => age >= 18));
console.log ("indexOf     " + ages.indexOf(33));
console.log ("lastIndexOf " + ages.lastIndexOf(33));
console.log ("filter      " + ages.filter(age => age >= 18));
