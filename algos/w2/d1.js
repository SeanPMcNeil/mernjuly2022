//Ordered Intersection
//Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays - do NOT count duplicates
//Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
//Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]

function orderedIntersection (arr1, arr2) {
    let interArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && interArr[interArr.length-1] != arr1[i]) {
            interArr.push(arr1[i]);
        }
    }

    // Alternative Process
    // if (arr2[i] == arr1[i]  && interArr[interArr.length-1] != arr1[i]) {
    //     interArr.push(arr1[i]);
    // } else if (arr2[i] > arr1[i] || arr1.length != arr2.length) {
    //     let temp = 0;
    //     while (temp < i) {
    //         if (arr2[temp] == arr1[i] && interArr[interArr.length-1] != arr1[i]) {
    //             interArr.push(arr1[i]);
    //         }
    //         temp++;
    //     }
    // }

    return interArr;
}


const arr1 = [1,2,2,3,4,5];
const arr2 = [2,4,6,7,8];

const arr3 = [1,1,1,2,3,4];
const arr4 = [1,1,3,4,5];

// const arr5 = [5,1,7,3,9,12,7];
// const arr6 = [44,7,1,8,6,3,4,7,8,9,1];

console.log(orderedIntersection(arr1,arr2));
console.log(orderedIntersection(arr3,arr4));
// console.log(orderedIntersection(arr5,arr6));