
// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries=['india','austarilia','china']
let countrytocheck='Ethiopia';
if (countries.includes(countrytocheck)){
    console.log('Ethiopia');
}
else
{
    countries.push(countrytocheck);
    console.log(countries);
}