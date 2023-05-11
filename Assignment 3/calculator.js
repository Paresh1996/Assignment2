function sum() {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let sum=parseFloat(num1) + parseFloat(num2);
    alert("Sum of "+num1+ " and " +num2+ " is : "+sum)
}