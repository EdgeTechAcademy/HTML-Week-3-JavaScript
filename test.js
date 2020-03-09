let number = num =[12,42,67,70,67,21,38,97,105,11];
let findNum = 65;
let result;
result= num.filter(num => num < 65);
let smallest = num.reduce((prev, n) => prev < n ? prev : n);
let biggest = num.reduce((prev, n) => prev > n ? prev : n);
console.log ("The array has " + result.length + " numbers. Biggest Number is " + biggest + " Smallest Number is " + smallest);
