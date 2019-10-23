
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
  return actual;
};

module.exports = assertEqual;