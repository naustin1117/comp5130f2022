const express = require('express'),
      cors    = require('cors'),
      dbOperation = require('./dbFiles/dbOperation');


const API_PORT = process.env.PORT  || 5000;
const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//this is call to server for creating a newUser
app.post('/api', async(req,res) => {
    console.log("creating new user");
    console.log(req.body);
    await dbOperation.createUser(req.body);
    const result = await dbOperation.getUsers(req.body.name);
    res.send(result.recordset);
})

//this is a call to get a specific user
app.post('/user', async(req,res) => {
    console.log("getting user");
    console.log(req.body);
    const result = await dbOperation.getUsers(req.body.Email);
    res.send(result.recordset);
    
})

//this is call to server to quit
app.get('/quit', function(req,res) {
    console.log("Called quit");
    res.send({result: "Peace"})
})

app.listen(API_PORT, () => console.log('Listening on port', API_PORT));
