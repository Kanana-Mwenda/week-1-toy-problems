    const readline = require('readline');
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });
//speed detector toy problem

function calculateDemeritPoints(speed){
    const speedLimit=70;
    const maxDemeritPoints=12;
    let demeritPoints=0;


    //check the speed
    if (speed < speedLimit){
        console.log("Ok");
    }else {
        demeritPoints=Math.floor((speed-speedLimit) /5);
        console.log(`demeritPoints: ${demeritPoints}`);
    }

//check if points exceed the limit
if (demeritPoints > maxDemeritPoints){
    console.log("License suspended");
}
}

rl.question('Enter the car speed :',
    (input) => {
        const speed = parseInt(input,10);
        if (isNaN(speed) || speed < 0){
            console.log("Please enter a valid number.");
        }
        else{
            calculateDemeritPoints(speed);
        }
        rl.close();
        });


