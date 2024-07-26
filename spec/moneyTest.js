import { formatCurrency } from "../src/money.js";

console.log("Hi");
describe("test suite : formatCurrency", () => {
  it("converts cents into dollar ", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("work with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("round upto nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
  // new test case added 

  // another test case added

  // there is another changes
  
});
