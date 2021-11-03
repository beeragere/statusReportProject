
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'shubhangarb',
    port: 5432
})

///////////////////////connect to the client///////////////////////////////
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

////////////////////querry data from userdata table/////////////////////////
client
    .query("SELECT * FROM  userdata")
    .then(
        res => {
            res.rows.forEach(value => {
                console.log(`   username is ${value.username} and password is ${value.password}`);
            })
        }
    )
    .catch(err => {
        console.log(`error ${err}`);
    })