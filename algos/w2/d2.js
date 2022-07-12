//Union Sorted Arrays
//Efficiently combine two already-sorted multiset arrays into a new sorted array containing the multiset union.
//Unions by default will take the set of duplicates that has the highest occurrences from one array. (ex, if one array has three 2's and another has two 2's then the result will have three 2's)

function unionSort(arr1,arr2) {
    let sortedArr = [];

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < arr1.length; i++) {
        if (map1[arr1[i]] >= 1){
            map1[arr1[i]] += 1;
        } else {
            map1[arr1[i]] = 1;
        }
    }

    console.log(map1);

    for (let i = 0; i < arr2.length; i++) {
        if (map2[arr2[i]] >= 1){
            map2[arr2[i]] += 1;
        } else {
            map2[arr2[i]] = 1;
        }
    }

    console.log(map2);

    for (var j in map1) {
        for (var k in map2) {
            if (parseInt(j) == parseInt(k)) {
                if (map1[j] <= map2[k]) {
                    let runner = 1;
                    while (runner <= map2[k]) {
                        sortedArr.push(parseInt(k));
                        runner++;
                    }
                } else {
                    let runner = 1;
                    while (runner <= map1[j]) {
                        sortedArr.push(parseInt(j));
                        runner++;
                    }
                }
                break;
            } else if (parseInt(j) < parseInt(k)) {
                let runner = 1;
                while (runner <= map1[j]) {
                    sortedArr.push(parseInt(j));
                    runner++;
                }
                break;
            } 
            // else if (parseInt(k) < parseInt(j)) {
            //     let runner = 1;
            //     while (runner <= map2[k]) {
            //         sortedArr.push(parseInt(k));
            //         runner++;
            //     }
            // }
        }
    }

    // WORKING ANSWER
    // let answer = []
    // let i=0;
    // let j=0;
    //     while( j<arr2.length){
    //         if(arr1[i] == arr2[j]){
    //             answer.push(arr1[i])
    //             i++
    //             j++
    //         }
    //         else if (arr1[i] < arr2[j]){
    //             answer.push(arr1[i]);
    //             i++
    //         }
    //         else{
    //             answer.push(arr2[j]);
    //             j++
    //         }
    //     }
    //     for (let z=i; z<arr1.length; z++){
    //         answer.push(arr1[z]);
    //     }
    // return answer;

    return sortedArr;
}








//Examples:
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];
// console.log(unionSort(nums1A,nums1B) == expected1);
// console.log(unionSort(nums1A,nums1B));

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];
// console.log(unionSort(nums2A,nums2B) == expected2);
console.log(unionSort(nums2A,nums2B));