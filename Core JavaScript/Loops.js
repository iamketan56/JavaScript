//For loop Example 1
let num = 1;
for (let i = num;i<5; i++) //for([intialization];[condition];[inc/dec])
{
    console.log("Hello")
}
    
//For loop Example 2
for (let i = num; ; i++) // we can give condtion within the loop
{
    console.log(i);
    if (i == 10)
    {
        break 
    }
}

//For loop Example 3
for (let i = 1; i <= 10; i++) // table of 2
{
    console.log(`${2}x${i}` + "=" + 2*i )
}