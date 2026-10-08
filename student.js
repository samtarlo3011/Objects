function createStudent(name, grade, gpa) {
  const student = {
    name: name,
    grade: grade,
    gpa: gpa,
  };
  if (student.gpa >= 3.5) {
    student.isHonors = true;
  } else {
    student.isHonors = false;
  }
  return student;
}
const Alex = createStudent("Alex", 11, 3.7);
const Sam = createStudent("Sam", 10, 2.9);
const ChenZee = createStudent("ChenZee", 12, 3.5);
students = [Alex, Sam, ChenZee];

console.log(students.find(object => student.name === "ChenZee"));
/* 
function findByName(students, targetName) {
  if (students.find(targetName) === undefined) {
    return null;
  } else {
    return students.find(targetName);
  }
}

console.log(findByName(students, "ChenZee")); */
