//Function Accept function as agrument
//Example 1
function callthreetimes(f)
{
    f();
    f();
    f();
}
function sayhi()
{
    console.log("Hiiii")
}
function sayhello()
{
    console.log("Hellooo")
}
callthreetimes(sayhi)

//Exapmle 2
function call_n_times(f,n)
{
    for (let i = 1; i <= n; i++)
    {
        f();
        }
}
call_n_times(sayhi, 6)

//Example 3
function pickone(f1, f2)
{
    let rand = Math.random();
    console.log(rand)
    if (rand < 0.5)
    {
        f1()
    }
    else
    {
        f2()
        }
}
pickone(sayhi, sayhello)

//Function that return a function
//Example 1
function multipleby(num)
{
    return function (x)
    {  
        return x * num;
        
        }
}
const triple = multipleby(3)
const double = multipleby(2)
const halve =   multipleby(0.5)
console.log(triple(2))
console.log(double(3))
console.log(halve(4))

//Example 2

function check_number_is_divideby(num)
{
    return function (x)
    {
        if (x % num == 0)
        {
            return true;
        }
        else
        {
            return false;
            }
        }
}
const a = check_number_is_divideby(2)
console.log(a(7))
const b = check_number_is_divideby(5)
console.log(a(20))
