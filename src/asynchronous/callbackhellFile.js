const fs = require("fs");

fs.readFile("./readFile/file.json", (err, data) => {
  if (err) {
    console.error("unable to read file");
  } else {
    const content = JSON.parse(data);
    console.log(content);
    fs.readFile("./readFile/file1.json", (err1, data1) => {
      if (err1) {
        console.error("unable to read file");
      } else {
        const content1 = JSON.parse(data1);
        console.log(content1);
      }
    });
  }
});
