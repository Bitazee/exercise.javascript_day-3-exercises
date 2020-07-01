function month(){
    var year;
    var month;

    var input;
    var validInput = false;

    while(!validInput){
        input = prompt("Enter Year and Month Example (2019 2):");

        var numberArray = input.split(" ");
        year = numberArray[0];
        month = numberArray[1];
        if(!isNaN(month) && !isNaN(year)){
            if(month > 0 && month < 13);
            year = parseInt(numberArray[0]);
            month = parseInt(numberArray[1]);
            validInput = true;
        }
    }

    if(month == 2){
        if(isLeap(year)){
            console.log("29 days");
        }
        else{
            console.log("28 days");
        }
    }
    else{
        if(month > 0 && month < 8){ // Month 1-7 exclude not 2 
            if(month % 2 != 0){
                console.log("31 days");
            }
            else{
                console.log("30 days");
            }
        }
        else{ // Month 8-12
            if(month % 2 == 0){
                console.log("31 days");
            }
            else{
                console.log("31 days");
            }
        }
    }     
}

function isLeap(y){
    if(y % 4 != 0){
        return false;
        console.log("Common Year");
    }
    else if(y % 100 != 0){
        return true;
        console.log("leap year");
    }
    else if(y % 400 != 0){
        return false;
        console.log("common year");
    }
    else{
        return true;
        console.log("leap year");
    }
}

month(); //CALLING THE FUNCTION