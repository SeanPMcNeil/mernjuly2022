// Printing keys and values
// Given an object, return an array of arrays containing the key and value of each entry
// Ex: given object
// const obj1 = {
//      name: "Pizza",
//      calories: 9001
// }
// return
// const result = [
//    ["name": "Pizza"],
//      ["calories", 9001]
// ]

function printKeyValue(obj){
    var answer = [];
    
    for (var i in obj) {
        answer.push([i, obj[i]]);
    }
    
    return answer;
}

const object = {name: "Pizza", calories: 9001}
console.log(printKeyValue(object));

// Once you have that worked out, you can work on the next algorithm
// Insert SQL Statement
// Given a table name string and an object whose key value pairs represent column names and values for the columns return a SQL insert statement string
// Ex: 
// const table = "users";
// const insertData1 = { first_name: "John", last_name: "Doe" };
// const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

function insertSQL(tbl, data) {
    // let result = 'INSERT INTO ' + tbl + ' ('
    let keys = "";
    let values = "";

    for (var i in data){
        // keys += i + ', ';
        keys += `${i}, `;
        // values += "'" + data[i] + "', ";
        values += `'${data[i]}', `;
    }
    
    keys = keys.slice(0, keys.length-2);
    values = values.slice(0, values.length-2);

    // result += keys + ') VALUES (' + values + ');'
    // console.log(result);

    let result = `INSERT INTO ${tbl} (${keys}) VALUES (${values});`;

    return result;
}

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };

console.log(insertSQL(table, insertData1));