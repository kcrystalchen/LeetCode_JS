//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(str) {
  // condition if str length is less than 1, or the str is empty return false
  if (!str || str.length < 1) return false;
  let longestPa = "";
  // loop through the str, and pass each ele in the str to the help function to determin if there is a substring is palindrome, and assigned each palindrome substring to the variable if the current substring palindrome is longer than the previous substring palindrome.
  for (let x = 0; x < str.length; x++) {
    let tempSubString = helpFunc(str, x, x);
    if (tempSubString.length > longestPa.length) {
      longestPa = tempSubString;
    }
    tempSubString = helpFunc(str, x, x + 1);
    if (tempSubString.length > longestPa.length) {
      longestPa = tempSubString;
    }
  }
  // return the longest substring palinedrome.
  return longestPa;
}
// the help function is to check the left side and the right side of the current ele/index, if they are matching, then expand the current index to the right side and left side. and return the substring when it is palindrome.
function helpFunc(str, startIndex, endIndex) {
  while (
    startIndex >= 0 &&
    endIndex < str.length &&
    str[startIndex] === str[endIndex]
  ) {
    startIndex -= 1;
    endIndex += 1;
  }
  return str.substring(startIndex + 1, endIndex);
}

console.log(longestPalindrome("aba"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abacdfgdcaba"));
console.log(longestPalindrome("aaaa"));

module.exports = longestPalindrome;

// function longestPalindrome(str) {
//     // if (str.length < 2) {
//     //     return str;
//     // }
//     // setup the longest palindrome
//     let longestPa = "";
//     // loop through the str and pass in the help function and update the longest palindrome
//     for (let index = 0; index < str.length; index++) {
//         let tempLongest = helpFun(str, index, index);
//         if (tempLongest.length > longestPa.length) {
//             longestPa = tempLongest;
//         };
//         tempLongest = helpFun(str, index, index + 1);
//         if (tempLongest.length > longestPa.length) {
//             longestPa = tempLongest;
//         }
//     }
//     // return the longest palindrome
//     return longestPa;
// };

// // help function - to check if the start index ele is same as the end index ele, the starting index ele move to left / previuos ele and the ending index ele move to the right / next ele if the current start index ele is the same as the end index ele until the start index ele is not the same as the end index ele, then return the range of the eles between the start index to the end index
// const helpFun = (passingStr, startIndex, endIndex) => {
//     while (startIndex >= 0 && endIndex < passingStr.length && passingStr[startIndex] === passingStr[endIndex]) {
//         startIndex -= 1;
//         endIndex += 1;
//     }
//     return passingStr.substring(startIndex + 1, endIndex);
// }
