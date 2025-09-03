// Calculate grade
// 90 >=A
// 80 >= B
// 70 >= C
// 60 >= D
// Fail - F

function calculateGrade(marks) {
  if (marks >= 90) {
    return `A`;
  } else if (marks >= 80) {
    return `B`;
  } else if (marks >= 70) {
    return `C`;
  } else if (marks >= 60) {
    return `D`;
  } else {
    return `FAIL`;
  }
}

let grade = calculateGrade(80)
print(`STUDENT GRADE: ${grade}`)
