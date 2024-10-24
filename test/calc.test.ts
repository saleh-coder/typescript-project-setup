import { sum } from "../src/calc";

test("It should add up correctly", () => {
  const result = sum(12, 20);
  expect(result).toBe(32);
});
