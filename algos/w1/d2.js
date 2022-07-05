//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
//Ex: [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]
let arr = [5,9,2,7,6];
console.log(arr);

function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort(arr));

//Selection Sort
//Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. Then iterate through everything except the first number, which is now sorted, and find the next smallest value and move it to index 1. Keep doing this until all values are sorted. 
//Ex: [7,5,2,8,4] -> [2,5,7,8,4] -> [2,4,7,8,5] -> [2,4,5,7,8]
let arr2 = [7,5,2,8,4]
console.log(arr2);

function selectionSort(arr){
    for (var i = 0; i < arr.length; i++){
        let lower = arr[i];
        let index = i;
    
        for (var j = i+1; j < arr.length; j++){
            if (arr[j] < lower){
                lower = arr[j];
                index = j;
            }
        }
    
        if (lower != arr[i]){
            let temp = arr[i];
            arr[i] = lower;
            arr[index] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr2));