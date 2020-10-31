function add(a, b)
{
    return a + b
}
function sub(a, b)
{
    return a - b
}
function div(a, b)
{
    return a / b
}
function mul(a, b)
{
    return a * b
}
//function in array
const Operations = [add, sub, div, mul];
/*
console.log(Operations[0](8,4))
console.log(Operations[1](8,4))
console.log(Operations[2](8,4))
console.log(Operations[3](8,4))
*/
for (let func of Operations)
{
    console.log(func(30,5))
}
//function in object
const thing = {
    dosomething : mul
}
console.log(thing.dosomething(2,3))