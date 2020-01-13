// const assertEqual = require('../assertEqual');

// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(tail(words).length, 2); // original array should still have 3 elements!
const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [1]

describe("#tail", () => {
  it("should return the length of the arrays -1", () => {
    assert.strictEqual((tail(words).length), 2);
  });
  it("should return an empty array if ", () => {
    assert.strictEqual((tail(numbers).length), 0);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});