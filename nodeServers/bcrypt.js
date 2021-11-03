const bcrypt = require("bcryptjs");
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("shubhanga", salt);

// console.log(hash);

let check = bcrypt.compareSync("password", hash);
console.log(check);

