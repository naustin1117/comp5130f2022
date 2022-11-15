const config            = require('./dbConfig'),
sqlConnectionToserver = require('mssql');


const getUsers = async(email) => {
    try {
        let pool = await sqlConnectionToserver.connect(config);
        let users = pool.request().query(`SELECT * FROM UserAuthentication WHERE Email = '${email}'`);
        console.log(users);
        return users;
    }
    catch(error){
        console.log(error);
    }
}

const getUser = async(User) => {
    let pool = await sqlConnectionToserver.connect(config);
    let users = pool.request().query("SELECT * FROM UserAuthentication WHERE User")
}
const createUser = async(User) => {
    try {
        let pool = await sqlConnectionToserver.connect(config);
        let users = await pool.request().query(`INSERT INTO UserAuthentication VALUES (${User.UserID},'${User.Username}','${User.Email}','${User.Password}')`);
        console.log(users);
        return users;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUsers
}