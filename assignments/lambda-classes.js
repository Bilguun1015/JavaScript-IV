// CODE here for your Lambda Classes
class Person {
    constructor(attributesPerson){
        this.name = attributesPerson.name;
        this.age = attributesPerson.age;
        this.location = attributesPerson.location;
        this.catchPhrase = attributesPerson.catchPhrase;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location} and I always say "${this.catchPhrase}"`);
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
        console.log(`${student.name} receives a perfect score on ${subject}.`);
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
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
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
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Atlanta',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Drinking is bad; but alcohol makes you fun!`
  });

  const dan = new Instructor({
    name: 'Dan',
    location: 'New Orleans',
    age: 55,
    favLanguage: 'Python',
    specialty: 'AI',
    catchPhrase: `I talk like a Dev!`
  });


  const henry = new Student({
    name: 'Henry',
    location: 'Minneapolis',
    age: 20,
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: `JUST DO IT!`,
    favSubjects: ['in-line block', 'fully responsive web design', 'js-class']
  });

  const ron = new Student({
    name: 'Ron',
    location: 'Bedrock',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'sleeping',
    catchPhrase: `Tachos are Nachos!`,
    favSubjects: ['flexbox', 'class function', 'array methods']
  });
  
  const sean = new ProjectManagers({
    name: 'Sean',
    location: 'LA',
    age: 25,
    favLanguage: 'C++',
    specialty: 'Back-End',
    catchPhrase: `Dont worry, everything is gonna be OK!`
  });

  const lora = new ProjectManagers({
    name: 'Lora',
    location: 'NewYork',
    age: 25,
    favLanguage: 'Java',
    specialty: 'calculations',
    catchPhrase: `tick tock tick tock, time is flying!`
  });

  fred.speak();
  dan.speak();

  fred.demo('Javascript');
  dan.demo('Python');

  fred.grade(ron, 'math');
  dan.grade(henry, 'english');

  ron.listsSubjects();
  henry.listsSubjects();

  ron.PRAssignment('java');
  henry.PRAssignment('flexbox');

  ron.sprintChallenge('CSS');
  henry.sprintChallenge('javascript');

  sean.standUp('Web 21');
  lora.standUp('After hours');

  sean.debugsCode(ron,'js');
  lora.debugsCode(henry,'css');