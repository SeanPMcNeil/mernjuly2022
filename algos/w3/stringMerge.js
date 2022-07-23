// Given 2 strings, zipper merge the strings based on the lexicographically smallest values first (duplicates increase value)

function solution(s1, s2){
    let answer = "";
    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s1.length || i < s2.length; i++){
        let j = i;
        while (j < s1.length || j < s2.length){
            if (j < s1.length){
                if (!map1[s1[j]]){
                    map1[s1[j]] = 1;
                } else {
                    map1[s1[j]]++;
                }
            }
            if (j < s2.length){
                if (!map2[s2[j]]){
                    map2[s2[j]] = 1;
                } else {
                    map2[s2[j]]++;
                }
            }
            j++;
        }

        if (map1[s1[i]] < map2[s2[i]]){
            j = i;
            while (map1[s1[j]] < map2[s2[j]] && j < s1.length){
                answer += s1[j];
                j++;
            }
            j = i;
            while (j < s2.length){
                answer += s2[j];
                j++;
            }
            break;
        } else if (map2[s2[i]] < map1[s1[i]]){
            j = i;
            while (map2[s2[j]] < map1[s1[j]] && j < s2.length){
                answer += s2[j];
                j++;
            }
            j = i;
            while (j < s1.length){
                answer += s1[j];
                j++;
            }
            break;
        } else if (map1[s1[i]] == map2[s2[i]]){
            if (s1[i] < s2[i]){
                answer += s1[i] + s2[i];
            } else {
                answer += s2[i] + s1[i];
            }
            continue;
        }
    }

    console.log(map1, map2);
    return answer;
}

const s1 = "dce";
const s2 = "abc";

console.log(solution(s1, s2));

const s3 = "dce";
const s4 = "cccabf";
console.log(solution(s3, s4));

const s5 = "abc";
const s6 = "def";
console.log(solution(s5, s6));
