function partitionSort(arr, pivot, left = 0, right = arr.length - 1) {
    while (left != right) {

        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }

        if (left == pivot && arr[right] < arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            pivot = right;
        }

        if (right == pivot && arr[left] > arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            pivot = left;
        }
    
        
        if (left < pivot) {
            left++;
        }
    
        if (right > pivot) {
            right--;
        }
    }

    return arr;
}

var sortArr = [7,9,1,6,2,10,8,4,3]; // [3,4,1,2,6,10,8,9,7]
console.log(partitionSort(sortArr, 3));