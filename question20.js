// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

function checkgrade(score) {
if (score>=80&& score<=100){
return"A";
}
else if (score >= 70 && score < 80) {
    return "B";

}else if (score >= 60 && score < 70) {
return"C";
}
else if (score >= 50 && score < 60) {
    return"D";
}
else if (score >= 0 && score < 50) {
    return "E";
}else
{
    return "Invaalid score"
}
}

console.log(checkgrade(85));   // A
console.log(checkgrade(76));   // B
console.log(checkgrade(64));   // C
console.log(checkgrade(53));   // D
console.log(checkgrade(33));   // F
console.log(checkgrade(105));







    
