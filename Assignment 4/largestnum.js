function findlargest() {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let num3 = document.querySelector("#num3").value;

    if (parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3))
    {
        document.querySelector("#display").innerHTML="Largest amoung three numbers is : "+parseInt(num1)
        console.log("Largest element is " + parseInt(num1));
    }
     else if (parseInt(num2) > parseInt(num1) && parseInt(num2) > parseInt(num3))
    {
        document.querySelector("#display").innerHTML="Largest amoung three numbers is : "+parseInt(num2)
        console.log("Largest element is " + parseInt(num2));
    }
    else {
        document.querySelector("#display").innerHTML="Largest amoung three numbers is : "+parseInt(num3)
        console.log("Largest element is " + parseInt(num3));
    }
}