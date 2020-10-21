/*function lol()
{
    let person = 'KD';
    const age = 21
    var color = 'White'
    console.log(person) //  accessable here 
}
console.log(person) // not accessable here 

*/
//Anthor exapmle
let bird = 'Sparrow'
function knowbird()
{    
    let bird = 'Peagon' // can do this bcz of scope of a function
    console.log(bird) 
}
console.log(bird)
knowbird()