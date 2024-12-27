import { people } from "./data.js";
import { numberOfEmployed } from "./solutions.js";

const answer = (question, answerFn) => {
  console.log(question);
  console.log(answerFn());
};

answer("How many people are employed?", () => numberOfEmployed(people));
answer("How many people are employed?", () => numberOfEmployed(people));
answer("How many people are employed?", () => numberOfEmployed(people));
answer("How many people are employed?", () => numberOfEmployed(people));
