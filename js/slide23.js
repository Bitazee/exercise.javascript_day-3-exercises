function smaller(){
    
    var input;
    var numberArray = [];
    var valid = false;

    while(!false){
        input = prompt("Input Two Numbers Example Input: 23 24");
    }

    numberArray = input.split(" ");

    if(numberArray[0] < numberArray[1]){
        console.log(numberArray[0]);
    }
    else{
        console.log(numberArray[1]);
    }
    
}
function smaller3(){
    var input;
    var numberArray = [];
    var valid = false;
    var currentLowestNumber;

    while(!false){
        input = prompt("Input Two Numbers Example Input: 23 24");
    }

    numberArray = input.split(" ");

    if(numberArray[0] < numberArray[1]){
        //console.log(numberArray[0]);
        currentLowestNumber = numberArray[0];
    }
    else{
       // console.log(numberArray[1]);
        currentLowestNumber = numberArray[1];
    }

    if(currentLowestNumber < numberArray[2]){
        console.log(currentLowestNumber);
    }
    else{
        console.log(numberArray[2]);
    }
}