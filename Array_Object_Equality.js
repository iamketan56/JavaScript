let A = [1, 2, 3]
let B = [1, 2, 3]
console.log(A == B)//both will give false bcz A and B are pointing on the different location thats why false was given

let C = A; // now C is pointing on the same location
console.log(C == A)
console.log(C === A)

console.log(C[1] == A[1])//true


console.log(C[1] == B[1])//value are same ....true


