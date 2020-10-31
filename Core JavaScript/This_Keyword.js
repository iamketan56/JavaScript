//This is a reference to an object and that object represents the current excution
/*function sayhi()
{
    console.log("HI");
    console.log(this) //it will show the window object
}
sayhi();
*/
//Ex 2
const person = {
    first: 'Ketan',
    Last: 'Sharma',
    fullname()
    {
        console.log(this)//now this time it will show the current object that is person
    }
}
person.fullname();

//Example 3
fullname() // this is not defiend bcz it does not know the full name
person.fullname() // not is works bcz the object is their now with fullname() .....something in left side to call a function

//Ex 4
console.log(this)//it will give window object
 console.log(person.Last)//it will give last name of person object