import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);
const dirPath = path.join(_dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "THis is simple file path.");
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });
// fs.appendFile(filePath, "and file name is apple.", (err) => {
//   if (!err) console.log("file is updated.");
// });
// fs.rename(filePath, `${dirPath}/abc.txt`, (err) => {
//   if (!err) console.log("file name is updated.");
// });
fs.unlinkSync(`${dirPath}/abc.txt`);
