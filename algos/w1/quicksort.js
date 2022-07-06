function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        const position = partition(arr, left, right)
        if (left < position - 1) quickSort(arr, left, position - 1)
        if (position < right) quickSort(arr, position, right)
    }
    return arr
}

function partition(arr, left, right) {
    const pivot = arr[Math.floor(Math.random() * (right - left + 1) + left)]

    while (left <= right) {
        while (arr[left] < pivot) {
            left++
        }
        while (arr[right] > pivot) {
            right--
        }
        if (left <= right) {
            swap(arr, left, right)
            left++
            right--
        }
    }
    return left
}

function swap(arr, left, right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}


const array = [4, 6, 6, 3, 4, 4, 2];
console.log(quickSort(array));