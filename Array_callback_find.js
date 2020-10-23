//Ex 1
let names = ['ketan sharma', 'vinay Parshad', 'rahul sharma', 'ashutosh gupta', 'ketan dwivedi']

const sharma = names.find(name => {
    return name.includes('sharma') // it will stop when sharma string will find(menas first string)
})
console.log(sharma)

//Ex 2
const books = [
    {
        age: 19,
        name : 'Ketan'
    },
    {
        age: 20,
        name : 'Vijay'
    },
    {
        age: 21,
        name : 'Ravi'
    }
]
const res = books.find(a => a.age > 20)
console.log(res)