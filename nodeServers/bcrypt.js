const bcrypt = require("bcryptjs");

//create random salt;
let salt = bcrypt.genSaltSync(10);

//hash the password and store the hash variable in database;
let hash = bcrypt.hashSync("shubhanga", salt);

//verify the password using the function compareSync();
let check = bcrypt.compareSync("password", hash);
console.log(check);

