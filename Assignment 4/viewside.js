function changeView(p) {
    let v = document.querySelector("#imgid");
    if (p == 1)
    {
        v.setAttribute("src", "frontview.jpg");
    }
    else if (p == 2)
    {
        v.setAttribute("src", "topview.jpg");
    }
    else if (p == 3)
    {
        v.setAttribute("src", "Sideview.jpg");
    }
    else {
        v.setAttribute("src", "backview.jpg");
    }
}


    function thumbsup() {
  let Counterinc = document.querySelector("#thumbup");
  let existingValue = Counterinc.innerHTML;
  let newValue = parseInt(existingValue) + 1;
  Counterinc.innerHTML = newValue;
}

function thumbsdown() {
    let Counterinc= document.querySelector("#thumbown");
    let existingValue = Counterinc.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    Counterinc.innerHTML = newValue;
}




