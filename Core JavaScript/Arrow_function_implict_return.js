/*const square = (x) => // arrow function (simple )
{
    return x * x;
}*/
// rewrite as
/*const square = n =>
    (
        n * n
    )*/
//console.log(square(2))
// rewrite as
const square = n=> n*n  // for simple program if long code then it will in paranthesis
console.log(square(2))

//example 
nums = [1, 2, 3, 4, 5, 6]
const double = nums.map(n => { return n * 2 })
// same as const double = nums.map(n => n * 2 )
