let a = 10;
let b = a;

console.log(a);
console.log(b);

a = 11;

console.log(a);//it will change but not b bcz it is just a varrible
console.log(b);

let arr = [1, 2, 3, 4, 5]; //arr point on this array
anth = arr;  // reference .....anth point on same location where arr is pointing ....every change reflect can be observe by anth as well 

console.log(arr);
console.log(anth);

arr.push(6);

console.log(arr);
console.log(anth);

arr.pop();

console.log(arr);
console.log(anth);

