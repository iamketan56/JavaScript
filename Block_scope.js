/*//Example 1
if (true)
{
    let animal = 'dog'
}
console.log(animal)//not accessable here
*/
//Example 2
var i = 10;
for (var i= 0; i< 15; i++)
{

}
console.log(i) // will show 15 in output bcz of var

//
//Example 3
var i = 10;
for (let i= 0; i< 15; i++)
{

}
console.log(i) // will show 10 in output bcz of let

// Var is not block scoped but let and const is block scoped 
