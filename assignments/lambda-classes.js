// CODE here for your Lambda Classes
class Person {
    constructor(attributesPerson){
        this.name = attributesPerson.name;
        this.age = attributesPerson.age;
        this.location = attributesPerson.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attributesInstructor){
        super(attributesInstructor);
        this.specialty = attributesInstructor.specialty;
        this.favLanguage = attributesInstructor.favLanguage;
        this.catchPhrase = attributesInstructor.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(attributesStudent){
        super(attributesStudent);
        this.previousBackground = attributesStudent.previousBackground;
        this.className = attributesStudent.className;
        this.favSubjects = attributesStudent.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManagers extends Instructor {
    constructor(attributesPM){
        super(attributesPM);
        this.gradClassName = attributesPM.gradClassName;
        this.favInstructor = attributesPM.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  fred.demo(math);
