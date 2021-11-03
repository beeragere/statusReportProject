
const { Client } = require('pg');
const bcrypt = require('bcryptjs');

//create a salt for hashing the password
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync("something", salt);

let user = {
    username: "shubhanga.ta",
    password: hashedPassword
}
//connect to the local database;
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'shubhangarb',
    port: 5432
})

///////////////////////Connect to the Client///////////////////////////////
client
    .connect()
    .then(
        res => {
            console.log("connected");
        }
    )
    .catch(err => {
        console.log(`error: ${err}`);
    });

//add user to the database 
/*
client
    .query(`INSERT INTO node_userdata 
            VALUES('${user.username}', '${user.password}')`
        )
        .then(
            res => {
                console.log("successful");
            }
        )
        .catch(
            err => {
                console.log(`error: ${err}`);
            }
        )
    */
////////query data from node_userdata table////////
client
    .query("SELECT * FROM  node_userdata")
    .then(
        res => {
            res.rows.forEach(value => {
                console.log(`   username is ${value.username} and password is ${value.password}`);
            })
        }
    ).catch(err => { console.log(`error ${err}`);
    });

/////////Verify the password in node_userdata table///////////
client
    .query(`SELECT password FROM node_userdata WHERE username='${user.username}'`)
    .then(
        res => {
            let verifyPassword = res.rows[0].password;
            let check = bcrypt.compareSync('something', verifyPassword);
            
            if(check) console.log("password is correct");
            
            else console.log("password is incorect");
        }
    )
    .catch(
        err => { 
            console.log(`error: ${err}`);
        }
    )

