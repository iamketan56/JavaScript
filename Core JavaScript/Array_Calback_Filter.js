//Example 1
const nums = [2, 4, 56, 23, 25, 66,]
const odd = nums.filter(n => n % 2 == 1)
console.log(odd)
const even = nums.filter(n => n % 2 == 0)
console.log(even)

const bignum = nums.filter(n => n>30)
console.log(bignum) */

//Ex 2

const student = [
    {
        name: 'ketan sharma',
        class: 'IT',
        skill : 'Data-Structures'
    },
    {
        name: 'Ashutosh Gupta',
        class: 'CSE',
        skill : 'Machine-learning'
    },
    {
        name: 'Rahul Sharma',
        class: 'IT',
        skill : 'Mathematics'
    },
    {
        name: 'Vinay',
        class: 'CSE',
        skill : 'Java'
    }
]
const IT_student = student.filter(m => 
{

    return m.name.includes('Sharma')
})
console.log(IT_student)