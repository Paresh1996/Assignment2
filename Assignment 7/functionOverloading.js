console.log(`Function Overloading 
calling function using different parameters`)
function mul(num1, num2)
{
    return num1 * num2;
}
//Function Overloading 
//calling function using different parameters
console.log(mul()); //with no parameters

console.log(mul(1)); //with one parameters

console.log(mul(3,5));//with required parameters

console.log(mul(8, 7, 2));//with three parameters

//Putting shortcut using || By Default Value
console.log("Putting shortcut using || By Default Value")
function add(num1, num2)
{
    num1 = num1 || 0;
    num2 = num2 || 0;
    return num1 + num2;
}

console.log(add(2));