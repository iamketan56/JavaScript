//splice remove/replace element
let arr = ['A', 'B', 'C', 'D', 'E'];
console.log(arr);
arr.splice(1, 0, 'F');//insert new value
console.log(arr);

arr.splice(1,2);//delete value ...it will delete from index to index 3
console.log(arr);

arr.splice(1, 2, 'G', 'H');//replace value ...from index 1 to 3 
console.log(arr);
