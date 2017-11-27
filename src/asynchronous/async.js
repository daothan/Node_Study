function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function runner() {
  console.log("wait...");
  await wait(200);
  console.log("wait please...");
  await wait(200);
  console.log("already...");
  await wait(200);
  throw new Error(201);
}

async function main() {
  try {
    await runner();
    console.log("done!"); // It will not log because it catched error in function runner
  } catch (err) {
    console.log(`Having problem at ${err}`);
  }
}
main();
