// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ===================================== CHALLENGE #1 =================================================

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("makeSentence", () => {
  it("The function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    const people1 = [
      { name: "ford prefect smith", occupation: "a hitchhiker" },
      {
        name: "zaphod beeblebrox jackson",
        occupation: "president of the galaxy",
      },
      { name: "arthur dent mouse", occupation: "a radio employee" },
    ];
    // Expected output: ["Ford Prefect Smith is a hitchhiker.", "Zaphod Beeblebrox Jackson is president of the galaxy.", "Arthur Dent Mouse is a radio employee."]
    expect(makeSentence(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
    expect(makeSentence(people1)).toEqual([
      "Ford Prefect Smith is a hitchhiker.",
      "Zaphod Beeblebrox Jackson is president of the galaxy.",
      "Arthur Dent Mouse is a radio employee.",
    ]);
  });
});

//ReferenceError: makeSentence is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================
//we need a function that takes in an array and iterates through each element. We can use .map to accomplish this step
//since each element of the array is an object we can just combine the two key.value pairs using template literal syntax
//the only part that takes a bit more work is addressing "name" values in object since each string needs to be capitalized
//we can use .split method to create an array out of each name value and, then, access to a character at index[0] and call .toUpperCase
//once we have first character capitalized, we can add it to the rest of the string(after removing first character using .slice.)

const makeSentence = (people) => {
  let sentences = people.map((person) => {
    const namesArray = person.name.split(" ");
    const names = namesArray
      .map((e) => {
        return (e = e.charAt(0).toUpperCase() + e.slice(1));
      })
      .join(" ");
    return `${names} is ${person.occupation}.`;
  });
  return sentences;
};

//test passed

// ===================================== CHALLENGE #2 =================================================

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("dividedByThree", () => {
  it("The function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
    // Expected output: [ 2, 1, -1 ]
    expect(dividedByThree(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(dividedByThree(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

//ReferenceError: dividedByThree is not defined

// ============== <<<<< PSEUDO CODE >>>>> ===========================

// b) Create the function that makes the test pass.
// we need a function that takes in an array and checks for division by three
// first thing we need to do is filter out all of the non-number elements. We can use filter method
// once we have the arrays with just numbers, we can chain .map method and divide each number using mod operator
// resulting array will have division by 3 remainders as elements

const dividedByThree = (array) =>
  array.filter((e) => typeof e === "number").map((e) => e % 3);

//test passed

// ===================================== CHALLENGE #3 =================================================

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("The function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4];
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10];
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99);
    expect(sumCubed(cubeAndSum2)).toEqual(1125);
  });
});

//ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

// ============== <<<<< PSEUDO CODE >>>>> ===========================

//we need a function that takes in an array of numbers
//first things to do would be to cube each element. We can use .map method for this
//after that we can chain my favorite .reduce method to do the work for us

const sumCubed = (array) => array.map((e) => e ** 3).reduce((b, a) => b + a);

// test passed
