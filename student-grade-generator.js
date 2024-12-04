// create interface
const readline = require ('readline');

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    // determine grade from input mark
    function getGrade(mark){

    if ( mark>79) {
        return 'A';
    }else if (mark >= 60 && mark <= 79){
        return 'B';
    }else if (mark >= 49 && mark <= 59){
        return 'C';
    }else if (mark>=40 && mark <=48){
        return 'D';
    }else{
        return 'E';
    }
    }
    function getInput() {

        // enter the marks
        rl.question("Enter student's marks between 0 and 100:",(mark) =>{
            mark = parseInt(mark);
        
            //validate user input
            if (isNaN(mark) || mark<0 || mark> 100){
                console.log('Please enter a number between 0 and 100.');

                getInput();


        }else {
            const grade = getGrade(mark);
            console.log(`Student's grade is ${grade}`);
            rl.close();
        }
    });
}

getInput();


