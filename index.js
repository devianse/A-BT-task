const data = require("./data.json");

const task11Result = (animals) => {
  const result = {};
  // your code here
  let ageSum = 0;
  for (let animal of animals) {
    if (result[animal.type]) {
      result[animal.type]++;
      ageSum += animal.age;
      continue;
    }
    result[animal.type] = 1;
    ageSum += animal.age;
  }
  const avgage = Math.floor(ageSum / animals.length);
  result.avgage = avgage;
  return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
  let result = 0; //should be let, not const
  // your code here
  for (let animal of animals) {
    if (animal.type === "dog" && animal.breed) {
      result++;
    }
  }
  return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
  const result = [];
  // your code here
  for (let animal of animals) {
    if (
      (animal.type === "cat" &&
        animal.features.findIndex((item) => item === "black") >= 0) ||
      (animal.type === "dog" &&
        animal.features.findIndex((item) => item === "white") >= 0)
    ) {
      result.push(animal);
    }
  }
  return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
  const result = [...animals];
  // your code here
  result.sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    if (a.type === "cat") return b.age - a.age;
    if (a.type === "dog") return a.age - b.age;
    return 0;
  });
  return result;
};

console.log(task14Result(data));

// for n > 1
//implementation for n < 1 and -1 < n < -1 is a bit complicated

const myPowFunc = (number, n) => {
  const result = number;
  // your code here
  if (n === 0) return (result = 1);
  while (n > 1) {
    result *= number;
    n--;
  }
  return result;
};

console.log(myPowFunc(3, 4));

const result = [];
const myFlatFunc = (inputArray) => {
  //const result = inputArray;  NOT A COPY, if we wanna do this: const result = [...inputArray]
  //Recurcive approach down below

  // your code here
  for (let item of inputArray) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      myFlatFunc(item);
    }
  }
  return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], "asdf", [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
