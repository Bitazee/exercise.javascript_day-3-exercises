
function smaller(){
    
    var input;
    var numberArray = [];
    var valid = false;

    while(!valid){
        input = prompt("Input Two Numbers Example Input: 23 24");
        numberArray = input.split(" ");
        if(isNumber(numberArray[0]) == true && isNumber(numberArray[1] == true)){
            valid = true;
        }
    }

    if(numberArray[0] < numberArray[1]){
        return numberArray[0];
    }
    else{
        return numberArray[1];
    }
    
}
function smaller3(){
    var input;
    var numberArray = [];
    var valid = false;
    var currentLowestNumber;

    while(!valid){
        input = prompt("Input Three Numbers Example Input: 23 24 25");
        numberArray = input.split(" ");
        if(isNumber(numberArray[0]) == true && isNumber(numberArray[1] == true)){
            valid = true;
        }
    }

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

console.log(smaller());
console.log(smaller3());