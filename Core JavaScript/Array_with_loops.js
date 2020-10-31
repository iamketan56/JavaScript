/*A = [1, 2, 3, 4]
for (let i = 0; i < A.length; i++)
{
    console.log(A[i]) // print all element
}*/

Student = [
    {
        name: 'Ketan',
        marks_percent : 98
    } ,
    {
        name: 'Ankit',
        marks_percent : 92
    } ,
    {
        name: 'Vijay',
        marks_percent : 91
    } ,
    {
        name: 'Raman',
        marks_percent : 78
    }
]
for (let i = 0; i < Student.length; i++)
{
    let student = Student[i]
    console.log(`${student.name} secured ${student.marks_percent}`)
}