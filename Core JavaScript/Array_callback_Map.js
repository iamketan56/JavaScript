//Ex 1
const num = [1, 2, 3, 4, 5, 6, 7]
const add2 = num.map(function (t)
{
    return t+1
}) 
/*console.log(num)
console.log(add2)*/

//Ex 2
const even = num.map(function (t)
{
    if (t % 2 == 0)
    {
        return t + ' is even'
    }
    else
    {
        return t + ' is not even'
        }
})
console.log(even)

//Ex 3
const arr = ['etc', 'asap', 'wrt']
const modi = arr.map(function (word)
{
   return  word.toUpperCase().split("").join('.')
})
console.log(modi)