//Ex 1
onst votes = ['y', 'y', 'n', 'y', 'n', 'y', 'y', 'n', 'y', 'n',]
const result = votes.reduce((tally, val) =>
{
    if (tally[val])
    {
        tally[val]++
    }
    else
    {
        tally[val]=1
    }
    return tally;
}, {})
console.log(result)

//Another way
const result = votes.reduce((tally, val) =>
{
tally[val] = (tally[val] || 0)+1
}, {})
console.log(result)

//Ex 2
const student = [
    {
        name: 'ketan sharma',
        class: 'IT',
        skill: 'Data-Structures',
        age : 19
    },
    {
        name: 'Ashutosh Gupta',
        class: 'CSE',
        skill: 'Machine-learning',
        age:20
    },
    {
        name: 'Rahul Sharma',
        class: 'IT',
        skill: 'Mathematics',
        age : 21
    },
    {
        name: 'Vinay',
        class: 'CSE',
        skill: 'Java',
        age : 22
    },
    {
        name: 'Ashutosh Gupta',
        class: 'CSE',
        skill: 'Machine-learning',
        age:20
    },
    {
        name: 'Rahul Sharma',
        class: 'IT',
        skill: 'Mathematics',
        age : 21
    },
    {
        name: 'Vinay',
        class: 'CSE',
        skill: 'Java',
        age: 22
    }

]
const groupbyage = student.reduce((groupage, st) =>
{
    const key = st.age
    if (!groupage[key])
    {
        groupage[key] = [];
    }
    return groupage;
}, {})
console.log(groupbyage)