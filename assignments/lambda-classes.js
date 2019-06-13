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
    gradingStudent(student){
        return student.grade = Math.floor((Math.random()*100)+1);
        
    }
}

class Student extends Person{
    constructor(attributesStudent){
        super(attributesStudent);
        this.previousBackground = attributesStudent.previousBackground;
        this.className = attributesStudent.className;
        this.favSubjects = attributesStudent.favSubjects;
        this.grade = attributesStudent.grade;
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
    graduate(){
        if(ron.grade >= 70 && henry.grade >= 70 ){
             return `Congrats ${ron.name}, you are ready to graduate! Your final grade is ${ron.grade}. 
            Congrats ${henry.name}, you are ready to graduate! Your final grade is ${henry.grade}.`;
        } else if(ron.grade >= 70 && henry.grade < 70 ) {
            return `Congrats ${ron.name}, you are ready to graduate! Your final grade is ${ron.grade}. 
            You are almost there ${henry.name}, and your score is ${henry.grade}.`;
        } else if( henry.grade >= 70 && ron.grade < 70 ){
            return `Congrats ${henry.name}, you are ready to graduate! Your final grade is ${henry.grade}. 
            You are almost there ${ron.name}, and your score is ${ron.grade}.`;
        } else{
            return `Keep trying! Your are almost there`;
        }
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


//New objects are here

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
    favSubjects: ['in-line block', 'fully responsive web design', 'js-class'],
    grade: 90
  });

  const ron = new Student({
    name: 'Ron',
    location: 'Bedrock',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'sleeping',
    catchPhrase: `Tachos are Nachos!`,
    favSubjects: ['flexbox', 'class function', 'array methods'],
    grade: 80
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

  console.log(fred.gradingStudent(ron));
  console.log(dan.gradingStudent(henry));

  console.log(ron.graduate());
  console.log(henry.graduate());

