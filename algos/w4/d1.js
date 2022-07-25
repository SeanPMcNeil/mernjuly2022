// Can string become a palindrome
// Given a string, return true or false whether the letters provided could become a palindrome (they do not already have to be one, they just need the potential to become one)
// Think carefully here about what the rules are for something being a palindrome and see if you can use those rules to create an efficient method!

function palindrome(s) {

    if (s.length == 0){
        return false;
    } else if (s.length == 1){
        return true;
    }

    let freqTable = {};

    for (let i = 0; i < s.length; i++){
        if (!freqTable[s[i]]){
            freqTable[s[i]] = 1;
        } else {
            freqTable[s[i]]++;
        }
    }

    // console.log(freqTable);
    
    if (s.length == 2){
        if (freqTable[s[0]] != 2){
            return false;
        } else {
            return true;
        }
    }

    if (s.length % 2 == 0){
        for (var char in freqTable){
            if (freqTable[char] % 2 != 0){
                return false;
            }
        }
    } else {
        let counter = 0;
        for (var char in freqTable){
            if (freqTable[char] % 2 != 0){
                counter++
            }
        }
        if (counter > 1){
            return false;
        }
    }

    return true;
}


const str1 = "";
const expected1 = false;
console.log("Test 1: " + palindrome(str1));

const str2 = "a";
const expected2 = true;
console.log("Test 2: " + palindrome(str2));

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"
console.log("Test 3: " + palindrome(str3));

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"
console.log("Test 4: " + palindrome(str4));

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"
console.log("Test 5: " + palindrome(str5));

const str6 = "abc";
const expected6 = false;
console.log("Test 6: " + palindrome(str6));

const str7 = "aaccb";
console.log("Test 7: " + palindrome(str7));