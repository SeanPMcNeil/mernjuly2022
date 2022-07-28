// Encode 
//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//If result is not shorter(such as "bb"->"b2"), return the original string("bb")
const encode = (str) => {
    let table = {};

    for (let i = 0; i < str.length; i++) {
        if (!table[str[i]]) {
            table[str[i]] = 1;
        } else {
            table[str[i]]++;
        }
    }

    let answer = "";

    for (var char in table) {
        answer += char + table[char];
    }

    if (answer.length >= str.length){
        return str;
    }

    return answer;
}

// Decode
//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let lastChar;
    let answer = "";
    
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])){
            lastChar = str[i];
        } else {
            let numStr = str[i];
            let j = i + 1;

            while (!isNaN(str[j])) {
                numStr += str[j];
                j++;
            }

            i = j - 1;

            for (let k = 0; k < parseInt(numStr); k++) {
                answer += lastChar;
            }
        }
    }

    return answer;
}

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));
console.log(decode("g14f12"));