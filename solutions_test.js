import { numberOfEmployed } from "./solutions.js";
import { isEqual, test, groupTest } from "./test.js";
import { people } from "./data.js";

groupTest("numberOfEmployed", () => {
  test("should be 0 when there is no data", () => {
    return isEqual(0, numberOfEmployed([]));
  });

  test("should be 0 when there is data but nobody is employed", () => {
    return isEqual(0, numberOfEmployed([{ isEmployed: false }]));
  });

  test("should be 1 when there is just one person employed", () => {
    return isEqual(1, numberOfEmployed([{ isEmployed: true }]));
  });

  test("should be 1 when there is just one person employed", () => {
    return isEqual(2, numberOfEmployed(people));
  });
});
