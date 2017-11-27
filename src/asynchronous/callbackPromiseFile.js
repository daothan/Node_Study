const fs = require("fs");
const promise = require("bluebird");

console.time("all functions fs");
promise.promisifyAll(fs);
console.timeEnd("all functions fs");

fs.readFileAsync("./readFile/file.json").then(JSON.parse).then((data) => {
  console.log(data);
}).catch(SyntaxError, (e) => {
  console.error("invalid json in file", e.message);
})
  .catch((e) => {
    console.error("unable to read file", e.message);
  });


console.time("function readFile");
const readFileAsync = promise.promisify(fs.readFile);
console.timeEnd("function readFile");

readFileAsync("./readFile/file.json").then(JSON.parse).then((data) => {
  console.log(data);
}).catch(SyntaxError, (e) => {
  console.error("invalid json in file", e.message);
})
  .catch((e) => {
    console.error("unable to read file", e.message);
  });
