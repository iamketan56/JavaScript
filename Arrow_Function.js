//Ex 1
const greet = () =>{
    console.log("Hi i am arrow function");

}
greet()

//Ex 2
const square = (x) => // arrow function (if we have only one argument then we can leave the paranthesis )
{
    return x * x;
}
console.log(square(4))

//Ex 3
const even = (x) =>
{
return x%2 == 0
}
console.log(even(11))

//Ex 4
const multiply = (x, y) => // multiple arguments
{
    return x*y
}
console.log(multiply(2,3))
