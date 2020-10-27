class Student
{
    constructor(type)
    {
        this.type = type;
    }
    speak(line)
    {
        console.log(`${this.type} student is ${line}`)
    }
}
let intelligentstudent = new Student("Intelligent");
intelligentstudent.speak('Not always right')