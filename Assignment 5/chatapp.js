function send(p1) {
    let presenttag = document.getElementById('msgbox');
    let exstingvalue = presenttag.innerHTML;

    let boxtag = document.getElementById('msg');
    let message = boxtag.value;

    let position = p1 ? "end" : "start";
    let newValue = `<div class="fs-5 text-success mb-2" style="display: flex; border-radius: 5px;  justify-content: ${position}"> ${message}</div>`;
    presenttag.innerHTML = newValue + exstingvalue;

    boxtag.value = ' ';
}