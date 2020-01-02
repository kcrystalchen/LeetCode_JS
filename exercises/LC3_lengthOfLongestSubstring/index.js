// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// solution #1
// function lengthOfLongestSubstring(str) {
//   let maxLength = 0;
//   let startWindow = 0;
//   let hashTable = {};

//   for (let x = 0; x < str.length; x++) {
//     if (hashTable[str[x]] < x) {
//       startWindow = hashTable[str[x]] + 1;
//     }
//     hashTable[str[x]] = x;
//     maxLength = Math.max(maxLength, hashTable[str[x]] - startWindow + 1);
//   }
//   return maxLength;
// }

// solution #2
function lengthOfLongestSubstring(str) {
  var maxLength = 0;
  // create an empty new map object and assigned it to result
  var result = new Map();
  var start = 0;

  for (var i = 0; i < str.length; i++) {
    if (!result.has(str[i])) {
      result.set(str[i], i);
    } else {
      i = result.get(str[i]); // otherwise the current str[i] assign to the current i index
      result.clear();
    }

    if (maxLength < result.size) {
      maxLength = result.size;
    }
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring("aabcda"));
console.log(lengthOfLongestSubstring("abcdbe"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcabcdd"));

module.exports = lengthOfLongestSubstring;
