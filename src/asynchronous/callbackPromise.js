function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function main() {
  console.log("Hello...");
  wait(200).then(() => {
    console.log("wait...");
    return wait(200);
  }).then(() => {
    console.log("please wait...");
    return wait(200);
  }).then(() => {
    console.log("already...");
    return wait(200);
  })
    .then(() => {
      console.log("done!");
    });
}

main();

