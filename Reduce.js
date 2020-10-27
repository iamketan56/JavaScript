//simple product
const num =[1,2,3,4,5]
const product = num.reduce((total, curr)=>
{
    return total*curr
})
console.log(product)

//Anthor exmaple to find max
const grade = [3, 24, 33, 235,280, 2, 65, 276]
const maxelement = grade.reduce((max, curr) =>
{
    if (curr > max)
    {
        max=curr
    }
    return max
    /*
    return Math.max(max,curr)
    */
})
console.log(maxelement)