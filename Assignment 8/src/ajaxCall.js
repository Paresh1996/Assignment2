async function apicall() {
  let path = "https://jsonplaceholder.typicode.com/todos";

  let result = await fetch(path);
  let data = await result.json();

  console.log(data);
  for (let item of data) {
    let displaytag = document.querySelector("#display");
    let existingvalue = displaytag.innerHTML;
    let newdata = `<h1>Userid: ${item.id}</h1> <h2>${item.title}</h2><p style="font-size:21px">${item.completed}</p>`;
    displaytag.innerHTML = existingvalue + newdata;
  }
}
