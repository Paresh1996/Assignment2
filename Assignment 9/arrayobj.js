let student = [
  (obj1 = {
    name: "Paresh",
    email: "paresh@gmail.com",
    Cource: "Engineering",
    Batch: "2023",
  }),
  (bbj2 = {
    name: "Ram",
    email: "ram@gmail.com",
    Cource: "Engineering",
    Batch: "2021",
  }),
];
for (let item of student) {
  console.log("Name : " + item.name);
  console.log("Email : " + item.email);
  console.log("Cource : " + item.Cource);
  console.log("Batch : " + item.Batch);
}
