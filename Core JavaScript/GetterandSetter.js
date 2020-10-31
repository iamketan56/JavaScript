class student 
{
    constructor(name)
    {
        this.name = name;
    }
    setname(name)
    {
        this.name = name;
    }
    getname()
    {
        return this.name;
    }
}
let ketanname = new student("Ketan") // name is ketan
console.log(ketanname.getname())
ketanname.setname("Sharma")//set name to sharma
console.log(ketanname.getname())