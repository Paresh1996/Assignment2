import { writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";
function write() {
  let data = "hello World ";
  let filePath = "C:/Users/Paresh/Desktop/Web Programing/Assignment 8/abc.txt";
  writeFileSync(filePath, data);
  console.log("File written successfully");
  console.log("File has following content");
  let fileData = readFileSync(filePath, { encoding: "utf-8" });
  console.log(fileData);
}

export { write };
