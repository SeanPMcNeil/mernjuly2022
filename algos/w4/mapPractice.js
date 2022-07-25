function solution(a, b) {
    let table1 = new Map();
    let table2 = new Map();
    
    for (let i = 0; i < a.length; i++){
        if (table1.has(a[i])){
            table1.set(a[i], table1.get(a[i]) + 1)
        } else {
            table1.set(a[i], 1);
        }
        if (table2.has(b[i])){
            table2.set(b[i], table2.get(b[i]) + 1)
        } else {
            table2.set(b[i], 1);
        }
    }
    
    console.log(table1, table2);
    let swapCount = 0;
    
    for (const [key, value] of table1){
        let testVal = table2.get(key)
        if (testVal !== value || (testVal == undefined && !table2.has(key))){
            return false;
        }
    }
    
    return true;
}

const a = [1,2,3]
const b = [1,2,3]
console.log(solution(a,b))

const c = [1,2,3]
const d = [2,1,3]
console.log(solution(c,d))

const e = [1,2,2]
const f = [2,1,1]
console.log(solution(e,f))