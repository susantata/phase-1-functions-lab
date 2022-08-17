// Code your solution in this file!
let headQuaters = 42;
function distanceFromHqInBlocks(pickupLocation){
    return pickupLocation>headQuaters? pickupLocation-headQuaters : headQuaters-pickupLocation;
}
function distanceFromHqInFeet(pickupLocation){
    let distance = distanceFromHqInBlocks(pickupLocation);
    return distance*264;
}
function distanceTravelledInFeet(start, destination){
    let distanceWalked = start > destination ? start-destination : destination-start;
    return distanceWalked * 264;
}
function calculatesFarePrice(start, destination){
    let distanceWalked = distanceTravelledInFeet(start, destination);
    if(distanceWalked <= 400){
        return 0;
    }
    else if (distanceWalked > 400 && distanceWalked < 2000){

        return (distanceWalked - 400) * 0.02;
    }
    else if (distanceWalked > 2000 && distanceWalked < 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
    
}