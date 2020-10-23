//forEach acept a callback function
//Ex 1
const num = [1, 2, 3, 4, , 5, 6]
num.forEach(function (num)
{
 console.log(num)
})
//Ex 2
function triple(n)
{
    console.log(n*3)
}
num.forEach(triple)
//
const arr = [
    {
        name: 'Ketan',
        age:20
    },
    {
        name: 'Ankit',
        age:22
    },
    {

        name: 'vinay',
        age:23
    }
]
arr.forEach(function (n)
{
    console.log(n.name.toUpperCase())
 })