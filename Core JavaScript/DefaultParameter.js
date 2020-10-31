//Ex 1
function mul(x, y)
{
    y = typeof (y) === 'undefined' ? 1 : y
    return x*y
}
console.log(mul(2, 3))
console.log(mul(2))// only 1 agrument is passed

//Ex 2
function greet(person, greeting = 'Hi!')
{
    console.log(`${greeting} , ${person}`)
}
greet('ketan')

//Ex 3
function AB(x, y = [1, 2, 3])
{
    console.log(x,y)
}
AB(1)
AB(1,3)
