function leap(){
    var year;

    var validYear = false;

    while(!validYear){
        year = prompt("Enter a Year");
        result = parseInt(year);
      //  console.log(result);
        if(!(isNaN(result))){
            validYear = true;
            year = parseInt(year);
        }
    }
    
    if(year % 4 != 0){
        console.log("Common Year");
    }
    else if(year % 100 != 0){
        console.log("leap year");
    }
    else if(year % 400 != 0){
        console.log("common year");
    }
    else{
        console.log("leap year");
    }
}

leap();