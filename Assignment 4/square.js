function findSquare() {
    let num1 = document.querySelector("#num1").value;
    let sqr = parseInt(num1) * parseInt(num1)
    document.querySelector("#display").innerHTML = "Square is : " + parseInt(sqr)
    console.log("Square is : " +parseInt(sqr))
}