const express = require('express'),
      cors    = require('cors'),
      dbOperation = require('./dbFiles/dbOperation');

dbOperation.getUsers().then(res => {
    console.log(res);
} )
// const API_PORT = process.env.PORT  || 5000;
// const app = express()

// app.use(cors());

// app.get('/api', function(req,res) {
//     console.log("Called");
//     res.send({result: "Helloooo"})
// })

// app.get('/quit', function(req,res) {
//     console.log("Called quit");
//     res.send({result: "Peace"})
// })

// app.listen(API_PORT, () => console.log('Listening on port', API_PORT));

