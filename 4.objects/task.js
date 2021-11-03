'use strict';

function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student('Jane', 'female', '18');
let student2 = new Student('John', 'male', '19');

Student.prototype.setSubject = function (subjectName) {

  this.subject = subjectName;
}

Student.prototype.addMark = function (mark){
  
  if(this.marks === undefined){ 
    this.marks = []; 
  }

  this.marks.push(mark);
}

Student.prototype.addMarks = function (...moreMarks){

  if(this.marks === undefined){ 
    this.marks = []; 
  }

  moreMarks.forEach(mark => this.marks.push(mark));
}

Student.prototype.getAverage = function (){

  const sumMarks = this.marks.reduce((a, b) => a + b);
  
  return sumMarks / this.marks.length;
}

Student.prototype.exclude = function (reason){
  
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}