// Write a functions which checks if all items are unique in the array.

function areitemuniques(array){
    let uniqueset= new Set(array);
    return uniqueset.size===array.length;
}

const array1=[1,2,3,4,5,6,7];
console.log(areitemuniques(array1));

const array2=[3,3,5,6,7,8];
console.log(areitemuniques(array2));