const express = require("express"),
  cors = require("cors"),
  dbOperation = require("./dbFiles/dbOperation"),
  bcrypt = require("bcrypt");

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//this is call to server for creating a newUser
app.post("/api", async (req, res) => {
  console.log("creating new user");
  console.log(req.body);
  await dbOperation.createUser(req.body);
  res.send("User created!");
});

//Call when user logs in (checks the stored hash with the password hash stored in the database)
app.post("/login", async (req, res) => {
  console.log("getting user");
  const user = await dbOperation.getUser(req.body);
  if (user === null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    let hash = user.recordset[0].Password;
    let password = req.body.Password;
    let answer = await bcrypt.compare(password, hash);
    if (answer) {
      console.log("they are the same");
      res.send(true);
    } else {
      console.log("This sucks ass");
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

//this is call to server to quit
app.get("/quit", function (req, res) {
  console.log("Called quit");
  res.send({ result: "Peace" });
});

app.listen(API_PORT, () => console.log("Listening on port", API_PORT));
