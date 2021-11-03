const express = require('express');
const cors = require('cors');

const App = express();
let port = 9000;
let user = {
    username: "username",
    password: "password"
};

App.use(cors());
App.get('/', (req, res) => {
    let userData = req.query;
    if((userData.username === user.username) && (userData.password === user.password)){
        console.log("success");
        res.json({result: "success"});
    }

    else{
        console.log("reject");
        res.json({result: "reject"});
    }
})

App.listen(port, () => {
    console.log(`listening on port ${port}`);
})