//speed detector toy problem

function calculateDemeritPoints(speed){
    const speedLimit=70;
    const maxDemeritPoints=12;
    let demeritPoints=0;

    //check the speed
    if (speed < speedLimit){
        console.log("Ok");
    }else {
        let demeritPoints=Math.floor((speed-speedLimit) /5);
        console.log(`demeritPoints: ${demeritPoints}`);
    }

//check if points exceed the limit
if (demeritPoints > maxDemeritPoints){
    console.log("License suspended");
}
}
