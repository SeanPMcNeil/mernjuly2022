// Symmetric Difference
// Given two arrays of integers, return an array of all the numbers the arrays do NOT have in common
// The arrays may or may not be in order
// If there are duplicates of values that are in one array and not the other, only include the value once
// Ex: given [1,2] and [2,1,3] return [3]
// Ex: given [1,1] and [1] return []
// Ex: given [1,2,3] and [4,5,6] return [1,2,3,4,5,6]
// Ex: given [4,1,2,3,4] and [1,2,3,5,5] return [4,5]

function symmetricDiff(arr1, arr2) {
    let symmDiff = [];

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < arr1.length; i++) {
        if (map1[arr1[i]] >= 1){
            map1[arr1[i]] += 1;
        } else {
            map1[arr1[i]] = 1;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (map2[arr2[i]] >= 1){
            map2[arr2[i]] += 1;
        } else {
            map2[arr2[i]] = 1;
        }
    }

    for (var j in map1) {
        if (!map2[j]){
            symmDiff.push(parseInt(j));
        } else {
            continue;
        }
    }

    for (var k in map2) {
        if (!map1[k]){
            symmDiff.push(parseInt(k));
        }
        else {
            continue;
        }
    }

    return symmDiff;
}

const arr1A = [1,2];
const arr2A = [2,1,3];
console.log(symmetricDiff(arr1A,arr2A));

const arr1B = [1,1];
const arr2B = [1];
console.log(symmetricDiff(arr1B,arr2B));

const arr1C = [1,2,3];
const arr2C = [4,5,6];
console.log(symmetricDiff(arr1C,arr2C));

const arr1D = [4,1,2,3,4];
const arr2D = [1,2,3,5,5];
console.log(symmetricDiff(arr1D,arr2D));