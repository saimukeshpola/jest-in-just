let testArray = [];
for (let i = 0; i < 10; i++) {
  testArray.push(i);
}

let randomArray = [9, 5, 6, 7];

expect.extend({
  isArraySorted(arr) {
    if (typeof arr == null) {
      return {
        message: () => `expected a valid array. but found ${arr}`,
        pass: false,
      };
    }
    let pass = arr.toString() === [...arr].sort().toString();
    if (pass) {
      return {
        message: () => `expected sorted array and found to be sorted`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${[...arr].sort()} but found ${arr}`,
        pass: false,
      };
    }
  },
});

test("Is test array sorted", () => {
  expect(testArray).isArraySorted();
});

test("Is random array sorted", () => {
  expect(randomArray).isArraySorted();
});
