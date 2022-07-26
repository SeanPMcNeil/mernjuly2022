// Given a string, find the length of the longest substring of non-repeating characters
// A substring is an unbroken sequence of letters within a larger string

function substringCount(s){
    let finalCount = 0;

    for (let i = 0; i < s.length; i++){
        let table = {};
        let workingCount = 0;

        for (let j = i; j < s.length; j++){
            // Check if the character has appeared before
            if (!table[s[j]]) {
                table[s[j]] = 1;
                workingCount++;
                // If j is at the end of the string, check/set the count before the loop ends
                if (j == s.length - 1){
                    if (workingCount > finalCount){
                        finalCount = workingCount;
                    }
                }
            } else {
                // if the value is already in the table we hit a duplicate, check/set the count and break the loop
                if (workingCount > finalCount){
                    finalCount = workingCount;
                }
                break;
            }
        }
    }

    return finalCount;
}

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.
console.log(substringCount(str1));

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.
console.log(substringCount(str2));

const str3 = "pwwkew";
const expected3 = 3;
// Explanation: The answer is "wke", with the length of 3
console.log(substringCount(str3));

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"
console.log(substringCount(str4));