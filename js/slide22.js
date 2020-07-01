function isNumber(testString){

    if(isNaN(testString)){
        return false;
    }
    else{
        return true
    }
}

function convertToNNumber(testString){
    if(isNumber(testString)){
        return parseInt(testString);
    }
}


