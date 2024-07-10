// for of loop in array
const programmingarry = ["js", "c", "c++", "rust", "golang", "python"];
for (const key of programmingarry) {
  console.log(`using for of loop for value ${key}`);
}

// for of loop in object , only use for  in to get values from object
const myObjectof = {
  name: "user name",
  id: 1,
  email: "userfakeemail@gmail.com",
};
for (const newkey in myObjectof) {
  console.log(`using for of  in object with newkey ${newkey}`);
  //   console.log(myObject[key]);
}

//for in loop in object
const myObject = {
  name: "user name",
  id: 1,
  email: "userfakeemail@gmail.com",
};
for (const key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}

// for in loop in arrray
const programming = ["js", "c", "c++", "rust", "golang", "python"];
for (key in programming) {
  console.log(`key of array ${key} `);
  console.log(`values of array ${programming[key]}`);
}
