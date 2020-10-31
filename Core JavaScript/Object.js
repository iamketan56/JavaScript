//create a object with different property
const data =
{   //object literals
    //Data for ketan
    name: 'Ketan',
    age: 20,
    village: 'Pai',
    dist: 'Kaithal',
    State: 'Haryana',
    country: 'India'
};
//access the every property

console.log(data);
console.log("Name is "+ data.name);
console.log("Age is "+data.age);
console.log("From " + data.village + " " + data.dist + " " + data.State + "," + data.country);

//modify the property
//Data for Ankit
data.name = 'Ankit';
data.age = 22;
console.log(data);
console.log("Name is "+ data.name);
console.log("Age is "+data.age);
console.log("From " + data.village + " " + data.dist + " " + data.State + "," + data.country);

// add any prototype with propert of object
console.log(data.name.length);