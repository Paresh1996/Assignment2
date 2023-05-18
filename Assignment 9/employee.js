function main() {
  let str = ` { "EmpId": "101", "EmpName": "Raj", "Department": "Sales" }`;
  let obj = JSON.parse(str);
  console.log(obj);
}

main();
