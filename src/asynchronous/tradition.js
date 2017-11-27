const fs = require("fs");

fs.readFile("./readFile/file.json", (err, data) => {
  if (err) {
    console.error("unable to read file");
  } else {
    try {
      const content = JSON.parse(data);
      console.log(content);
    } catch (error) {
      console.error("Invalid json in file");
    }
  }
});

console.error("log read file");
