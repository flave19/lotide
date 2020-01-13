const assert = require('chai').assert;

describe("#assrtEqual", () => {
  it("returns true if array are equal", () => {
    assert.strictEqual(1, 1);
  });
  it("return false if array are not equal",() => {
    assert.strictEqual('lighthouse Labs', 'bootcamp'); 
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);