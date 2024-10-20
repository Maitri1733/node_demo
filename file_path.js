import fs from "fs";
// import * as path from "path";
// import { fileURLToPath } from "url";

// const dirPath = path.join(__dirname);
// console.warn("Hello", dirPath);
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);
const dirPath = path.join(_dirname, "files");
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     dirPath + "/hello" + i + ".txt",
//     "a simple file create code"
//   );
// fs.writeSync(`hello${i}.txt`, "a simple file create code");
// }
// console.log(dirPath);
fs.readdir(dirPath, (err, files) => {
  files.forEach((item) => {
    console.log(item);
  });
});
