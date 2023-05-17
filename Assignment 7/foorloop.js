//simple loop
console.log("simple loop")
for (let i = 0; i < 5; i++)
{
    console.log(i);
}

//Advance loop
console.log("Advance loop")
let list = ["a", "b", "c", "d"]
for (let item of list) {
    console.log(item)
}

//ForEach loop using callback 
console.log("ForEach loop using callback")
list.forEach((item) => console.log(item));


