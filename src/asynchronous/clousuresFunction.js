// Ex 1
function makeFunc() {
  const name = "Alex";
  function displayName() {
    console.log(`Hello ${name}`);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Ex 2
function showMessage(message) {
  return function () {
    console.log(`${message} - Content message`);
  };
}

const messageFunc = showMessage("Hello world");
messageFunc();


// Ex 3
function Student() {
  let name = "";
  let age = "";

  return {
    set(inName, inAge) {
      name = inName;
      age = inAge;
    },
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
  };
}

const studentObj = Student();

studentObj.set("Alex", "27");
console.log(studentObj.getName());
console.log(studentObj.getAge());


// Priority level of variable

const variable = "Global variables";
function showVariable() {
  const variable = "Local variables"; // This variable will be given priority and be set to "Local variables"
  return function () {
    console.log(variable);
  };
}

const priorityVariable = showVariable();
priorityVariable();
