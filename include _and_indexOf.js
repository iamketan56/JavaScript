//include method will tell about any value is present or not
let arr = [1, 2, 3,4, 4, 5, 6,3];
console.log(arr.includes(3));//true
console.log(arr.includes(7));//false

console.log(arr.includes(3, 3));//false second argument is from where to start seacrh for number
console.log(arr.includes(3, 0));//true second argument is from where to start seacrh for number

//indexof will return the index of an element
console.log(arr.indexOf(3));//2 if we have any copy of a number it will give the first index .
console.log(arr.indexOf(4));//3 
console.log(arr.indexOf(10));//-1 bcz not present

