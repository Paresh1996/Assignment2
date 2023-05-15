function calculate(p1){
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    let res=0
    if (p1 == 1)
    {
        res=parseFloat(val1)+parseInt(val2)
    }
    else if (p1 == 2)
    {
        res=parseFloat(val1)-parseInt(val2)
    }
    else if (p1 == 3)
    {
        res=parseFloat(val1)/parseInt(val2)
    }
    else if (p1 == 4)
    {
        res=parseFloat(val1)*parseInt(val2)
    }
    console.log(res)
    document.getElementById('result').value = res;
}

function clr() {
    let res = document.getElementById('result').value = ' ';
    let val1 = document.getElementById("num1").value = ' ';
    let val2 = document.getElementById("num2").value= ' ';
}