const A = // we use const to fix the reference
{
    d: 'D',
    e: 'E'
};
console.log(A)

const B = A; // B point to same object that was pointed by A also 
// if we change anything with B then it will reflect to A also
console.log(B)

B.f = 'F'
console.log(A.f) // it will give F as output

B.d = 'DD'
console.log(A)
console.log(B)
