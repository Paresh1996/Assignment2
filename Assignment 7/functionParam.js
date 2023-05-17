function student(Rollnumber, name = 'Raj', subject = 'maths', marks ) {
    
    console.log(Rollnumber);
    console.log(name);
    console.log(subject);
    console.log(marks)
}

student(101, 'Paresh', 'history', 81);
console.log();
let name = 'Raj'
let subject = 'maths'
student(102, name, subject, 90);

student(103, 'Jitesh', 98)

student(104, 'Ramesh','English',98,67)