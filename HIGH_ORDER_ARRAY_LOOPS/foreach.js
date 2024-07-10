const newVararray = ["js", "c", "c++", "rust", "golang", "python"];

newVararray.forEach((item) => {
  //   console.log(`values in array ${item}`);
});

// array with object for iteration
const myObjectArray = [
  {
    name: "user name",
    id: 1,
    email: "userfakeemail@gmail.com",
  },
  {
    name: "user name2",
    id: 2,
    email: "userfakeemail@gmail.com2",
  },
];

myObjectArray.forEach((item, index) => {
  //   console.log(` := ${item.name}`);
});

const objectTesting = {
  name: "user name",
  id: 1,
  email: "userfakeemail@gmail.com",
};

for (const key in objectTesting) {
  console.log(`what is this ${key}`);
}

// using map in array
myObjectArray.map((item) => {
  console.log(`name on object is ${item.name}`);
});
