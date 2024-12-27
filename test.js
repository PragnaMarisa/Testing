export let test = (description, testFn) => {
  const result = testFn();
  const mark = result ? "✅" : "❌";
  console.log(mark, description);
};

export const groupTest = (groupName, tests) => {
  console.log(groupName);
  console.log("-".repeat(groupName.length));
  const allTests = [];

  test = (description, testFn) => {
    allTests.push([description, testFn]);
  };

  tests();

  const results = allTests.map(([description, testFn]) => [
    description,
    testFn(),
  ]);

  const failedTests = results.filter(([_, result]) => !result);

  if (failedTests.length === 0) {
    console.log("All passed!");
  }

  for (const [description, result] of results) {
    const mark = result ? "✅" : "❌";
    console.log(mark, description);
  }
};

export const isEqual = (a, b) => a === b;

export const areEqual = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return isEqual(a, b);
  }

  if (a.length !== b.length) {
    return false;
  }

  return a.every((element, index) => areEqual(element, b[index]));
};

const checkObject = (obj1, obj2) => {
  const keysOfObject1 = Object.keys(obj1).sort();
  const keysOfObject2 = Object.keys(obj2).sort();

  if (!areEqual(keysOfObject1, keysOfObject2)) {
    return false;
  }

  return keysOfObject1.every((key) => areEqual(obj1[key], obj2[key]));
};
