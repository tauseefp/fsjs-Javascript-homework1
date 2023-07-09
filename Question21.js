21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer


    function checkseason(month){
        month=month.tolowercase();
    
    if (month==="september"||month==="otcber"||month==="november"){
    return Autumn;
}
else if (month==="December"||month==="Janaury"||month==="Febraury"){
    return Winter;}
else if (month==="March"||month==="April"||month==="May"){
    return Spring;
}
else if (month==="June"||month==="July"||month==="August"){
    return Summer;
}
else
{
    return"Invalid keyword Entered";
}
}
var userInput = prompt("Enter a month:"); 
var season = checkSeason(userInput);
console.log("The season is: " + season);