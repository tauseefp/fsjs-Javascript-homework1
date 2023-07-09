// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation

function solveLinEquation(a,b,c,x,y)
{
    let result = a*x+b*y+c;
    return result;
}

// let a=2;let b=4;let c=-7;let x=8;let y=9;

console.log(solveLinEquation(2,4,-7,8,9));