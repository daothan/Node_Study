function wait(ms, cb) {
  setTimeout(cb, ms); // callback after some mili seconds
}

function main() {
  console.log("Hello...");
  wait(200, () => {
    console.log("wait...");
    wait(200, () => {
      console.log("wait please...");
      wait(200, () => {
        console.log("done!");
      });
    });
  });
}
main();

