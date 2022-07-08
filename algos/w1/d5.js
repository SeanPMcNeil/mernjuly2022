function partitionSort(arr, pivot, left = 0, right = arr.length - 1) {
    while (left != right) {

        if (arr[left] >= arr[pivot] && arr[right] <= arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }

        if (left == pivot && arr[right] <= arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            pivot = right;
        }

        if (right == pivot && arr[left] >= arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            pivot = left;
        }

        if (left < pivot && arr[left] <= arr[pivot]) {
            left++;
        }
    
        if (right > pivot && arr[right] >= arr[pivot]) {
            right--;
        }
    }

    return arr;
}

function quickSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pivot = Math.floor(Math.random(arr.length) * arr.length);
        arr = partitionSort(arr, pivot);
        
        if (arr[i] > arr[i+1]) {
            arr = partitionSort(arr, i);
        }
    }
    return arr;
}

// var sortArr = [10,7,9,1,6,2,10];
// var sortArr = [-45, -5, 49, 15, 25, -38, 17, -17, -50, 8, 43, -22, 4];
// var sortArr = [15, 18, 7, 34, 26, 25, 40, 42, 5, 16, 36, 41, 22, 3, 14, 35, 4, 2, 50, 27, 13, 19, 17, 45, 6];
var sortArr = [25, -10, 20, 28, -19, 21, -29, -14, 49, -31, -35, -8, -21, -42, 38, -16, -32, 27, -17, -3, -43, 24, 17, 16, -27];
console.log(quickSort(sortArr));