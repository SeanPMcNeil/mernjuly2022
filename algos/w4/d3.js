// Given two strings, return true if the first string can be built from the letters in the 2nd string

function stringCompare (s1, s2) {
    if (s2.length < s1.length){
        return false;
    }

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s1.length || i < s2.length; i++) {
        if (i < s1.length){
            if (!map1[s1[i]]){
                map1[s1[i].toLowerCase()] = 1;
            } else {
                map1[s1[i]]++;
            }
        }
        if (!map2[s2[i]]){
            map2[s2[i].toLowerCase()] = 1;
        } else {
            map2[s2[i]]++;
        }
    }

    console.log(map1,map2);

    for (var char in map1){
        if (!map2[char]){
            return false;
        } else if (map2[char] < map1[char]){
            return false;
        }
    }

    return true;
}

const strA1 = "hello world";
const strB1 = "lloeh wordl";
const expected1 = true;
console.log(stringCompare(strA1, strB1));

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"
console.log(stringCompare(strA2, strB2));

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters
console.log(stringCompare(strA3, strB3));

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;
console.log(stringCompare(strA4, strB4));

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.
console.log(stringCompare(strA5, strB5));