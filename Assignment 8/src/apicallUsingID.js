async function apicallUsingID() {
  let idtag = document.querySelector("#id");
  let loc = idtag.value;
  let path = `https://jsonplaceholder.typicode.com/todos/${loc}`;

  let result = await fetch(path);
  let data = await result.json();

  console.log(data);

  let displaytag = document.querySelector("#display");
  let newdata = `<h1>Userid: ${data.id}</h1> <h2>${data.title}</h2><p style="font-size:21px">${data.completed}</p>`;
  displaytag.innerHTML = newdata;
}
