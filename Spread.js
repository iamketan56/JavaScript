/*const str = 'ABC'
console.log(...str)

const A = [1, 2, 3, 4, 5]
console.log(...A)

const B = ['ABC','DEF','GHI']
console.log(...B)*/

//With Objects
const A =
{
    name: 'Aman',
    age: 10
};
const B =
{
    name: 'Bhim',
    age: 12
};
const C =
{
    ...A,
    isdone : true,
};
console.log(C)