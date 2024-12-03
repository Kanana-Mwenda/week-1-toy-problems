function generateStudentGrade(mark){

//prompt user to enter student mark
    let mark =parseFloat(prompt('Enter student marks (between 0 and 100):'));

// check if input is a valid number and in the range
    if (isNaN(mark) || mark < 0 || mark > 100) { 
      return  'Invalid input. Please enter a number between 0 and 100.';
    }

    // determine grade from input marks
    let grade;
    if (mark>79) {
        return 'A';
    }else if (mark >= 60){
        return 'B';
    }else if (mark >= 50){
        return 'C';
    }else if (mark>=40){
        return 'D';
    }else{
        return 'E';
    }
}
// Return the grade
let grade= generateStudentGrade(mark){
    console.log( `The student grade is ${grade}`);
}
//call the function
generateStudentGrade();

