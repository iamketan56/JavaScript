const numbers =
{
    100: 'One hundred',
    16: 'Sixteen',
    LETTER: '10',
    '12 tweleve': 12
};
let num = '16';
//console.log(numbers.16);//it shows error


/console.log(numbers[16]);//it works
console.log(numbers[100])
console.log(numbers.LETTER);// is work bcz of its key is not a number
console.log(numbers['LETTER'])//this also work for this
console.log(numbers.12 tweleve)//it gives error
console.log(numbers["12 tweleve"])//it works
console.log(numbers.num);//it gave undefined
console.log(numbers[num]);//gives sixteen as output
console.log(numbers["LET" + "TER"]) // will give 10 as output