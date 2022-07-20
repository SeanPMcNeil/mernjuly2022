// Given an array of objects representing people, and a string representing a bad habit return a "santasNaughtyList" containing the first and last names of all the people who have the matching bad habit so that santa knows how much coal he needs.

function habitFinder(list, habit) {
    let santasNaughtyList = [];

    for (let i = 0; i < list.length; i++) {

        if (list[i].habits.includes(habit)){
            santasNaughtyList.push(`${list[i].firstName} ${list[i].lastName}`);
        }

        // for (let j = 0; j < list[i].habits.length; j++){
        //     if (list[i].habits[j] == habit){
        //         santasNaughtyList.push(`${list[i].firstName} ${list[i].lastName}`);
        //     }
        // }
    }

    return santasNaughtyList;
}

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];
console.log(habitFinder(students, badHabit1));


const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];
console.log(habitFinder(students, badHabit2));

const badHabit3 = "doesn't do algorithms";
const expected3 = [];
console.log(habitFinder(students, badHabit3));