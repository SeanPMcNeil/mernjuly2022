// Find the # of Contiguous Sub Arrays containing only descending values

function solution (numbers) {
    let count = 1;

    for (let i = 0; i < numbers.length - 1; i++){
        let j = i;

        while (numbers[j] > numbers[j+1]){
            count++;
            j++;
        }

        count++;
    }

    return count;
}

const arr = [9,8,7,6,5];
console.log(solution(arr))
const arrRev = [5,6,7,8,9];
console.log(solution(arrRev));