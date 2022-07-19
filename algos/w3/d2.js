// Find Objects
// Given a search criteria object whose values will only be primitives (ints, strings, booleans) and a list of objects return any object that matches all the key value pairs in the search critera object

function findObjects(items, search) {
    let answer = [];

    for (let i = 0; i < items.length; i++){
        let valid = true;
        for (let j in items[i]){
            for (let k in search){
                if (j == k && items[i][j] != search[k]){
                    valid = false;
                    break;
                }
            }
            if (!valid){
                break;
            }
        }
        if (valid){
            answer.push(items[i]);
        }
    }

    return answer;
}

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};

const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

console.log(findObjects(items, searchCriteria1));

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

console.log(findObjects(items, searchCriteria2));

// Given an array of objects, a searchFor string, and searchBy key that exists in the object return a new array of only those objects whose value for the given key starts with the given search string.
// You can assume the key will exist on the object and the value of that key will be a string.

// Bonus: make the search case insensitive.

// This kind of algorithm can be used in react onChange as you type into a search bar to live-filter a list.

function searchObjects(people, searchFor, searchBy){
    let answer = [];
    for (let i = 0; i < people.length; i++){
        for (let k in people[i]){
            if (k != searchBy) {
                continue;
            } else if (people[i][k].slice(0, searchFor.length).toLowerCase() == searchFor.toLowerCase()){
                answer.push(people[i]);
                break;
            }
        }
    }

    return answer;
}

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

// const searchFor1 = "Jo";
// const searchBy1 = "firstName";
const searchFor1 = "Do";
const searchBy1 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

console.log(searchObjects(people, searchFor1, searchBy1));