import { readFileSync } from "node:fs";
function read() {
  let filePath = "C:/Users/Paresh/Desktop/Web Programing/Assignment 8/demo.txt";
  let fileData = readFileSync(filePath, { encoding: "utf-8" });
  console.log(fileData);
}

export { read };
