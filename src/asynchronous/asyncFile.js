const fs = require("fs");

async function readFile1() {
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
}

async function readFile2() {
  fs.readFile("./readFile/file1.json", (err, data) => {
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
}

async function main() {
  try {
    await readFile2();
    await readFile1();
  } catch (err) {
    console.log(err);
  }
}
main();
