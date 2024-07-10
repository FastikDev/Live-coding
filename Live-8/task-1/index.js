import { User } from './user.js';
import { Student } from './student.js';

//const user = new User(1, 'John', 'Doe');
//console.log(user);
//user.setIsAdmin = 100;
//console.log(user.getIsAdmin);
//console.log(user.getId);
//console.log(user.getFullName);

//--
const student = new Student(1, 'Jane', 'Doe', 'FE', 100);
console.log(student);
student.getFullName();

function getTopStudent (students) {
  const { id, firstName, lastName } = students.filter(student => student.getIsActive).reduce((topStudent, curentStudent) => {
    if (curentStudent.points > topStudent.points) {
      return curentStudent;
    }
    return topStudent;
  }, students[0]);
  return { id, firstName, lastName };
}

//testing
const student1 = new Student(1, 'John', 'Doe', 'FE', 100);
const student2 = new Student(2, 'Ann', 'Joo', 'FE', 100);

student2.setIsActive = false;
console.log(getTopStudent([student1, student2]));

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName());  console.log(user2.getFullName()); console.log(user3.getFullName()); // ===> Jim Beam

const student4 = new Student(4, 'Alice', 'Johnson', 'Math', 85);
const student5 = new Student(5, 'Bob', 'Smith', 'Physics', 92);
const student6 = new Student(6, 'Carol', 'Williams', 'Chemistry', 78);

student2.getIsActive = false;
const students = [student1, student2, student3];

const students2 = [student4, student5, student6];

console.log(getTopStudent(students)); // ===> { id: 1, firstName: 'Alice', lastName: 'Johnson' }

console.log(getTopStudent(students2));
