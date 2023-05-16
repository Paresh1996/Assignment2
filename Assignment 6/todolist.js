function addElement() {
    let inptag = document.getElementById('parent')
    let currentval = inptag.innerHTML;

    let msgtag=document.getElementById('inp')
    let elemtag=msgtag.value;

    let newval=`<div><div style="display: flex; justify-content: space-between; padding: 5px; margin: 10px">
        ${elemtag}
        <input type="button" value="Clear" onclick="clr(this)" />
      </div>
      <hr />
      </div>`
    
    inptag.innerHTML = currentval + newval;
    msgtag.value = ' ';
}

function clr(p1) {
    p1.parentElement.parentElement.remove();
}