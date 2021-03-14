const fs = require("fs");

let names = fs.readFileSync("p022_names.txt", "utf-8").split('","');
names[0] = names[0].replace('"', "");
names[names.length-1] = names[names.length-1].replace('"', "");
names.sort();

let scores = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
}

let total = 0;
for(let i = 0; i < names.length; i++){
    let sum = 0;
    for(let j = 0; j < names[i].length; j++){
        sum += scores[names[i][j]];
    }
    total += sum * (i+1);
}

console.log(total);