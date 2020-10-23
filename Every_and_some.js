//Every
//Ex 1
const words = ['Dog', 'Eve', 'Ate', 'Sum']
const threeletter = words.every(word => word.length === 3)
console.log(threeletter)

//Ex 2
const wordss = ['Dog', 'Eve', 'taken', 'Sum']
const isthreeletter = wordss.every(word => word.length === 3)
console.log(isthreeletter)

//Ex 3
const Wrds = ['Any', 'Fly', 'Cry', 'My']
const islasty = Wrds.every(w =>
{
    const last = w.length - 1;
    return w[last] === 'y'
    })
console.log(islasty) // every last char is y in wrds 

//Some
const words = ['Dog', 'Even', 'Ate', 'Sum']
const threeletter = words.some(word => word.length === 3)
console.log(threeletter) // some will return true if any of the array element pass the condtion