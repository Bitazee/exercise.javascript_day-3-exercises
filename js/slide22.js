function isNumber(testString){

    if(parseInt(testString) != NaN){
        return "true";
    }
    else{
        return "false";
    }
}

function convertToNNumber(testString){
    return parseInt(testString);
}
