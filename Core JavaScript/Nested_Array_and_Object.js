const student =
{
    first_name: 'Ketan',
    last_name: 'Dwivedi',
    skills: ['DS','JS','HTML','CSS'],
    exam:
    {
        midterm: 98,
        finaltern: 98
    }
};
const avg = (student.exam.finaltern + student.exam.midterm) / 2
console.log(student.first_name + " " + student.last_name + ":" + "Average's Marks is " + avg)
console.log(student.first_name + " " + student.last_name + ":" + "Having Strengths are " + student.skills[0]+","+student.skills[1]+","+","+student.skills[2]+" and "+student.skills[3])
