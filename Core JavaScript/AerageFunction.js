function avg(arr)
{
    let sum = 0;
    for (let num of arr)
    {
        sum+=num
    }
    console.log(sum/arr.length)
}
avg([75,76,80,95,100])