function sum(...nums) // rest
{
    return nums.reduce((total, curr) =>
    {
        return total + curr;
    })
}
console.log(sum(1, 2, 3, 4, 5))

//Ex 2
function fullname(first, last, ...title) //cant use rest in between
{
    console.log(first)
    console.log(last)
    console.log(...title)
}
fullname('ketan','Sharma','Dwivedi',18,'It')