const config            = require('./dbConfig'),
sqlConnectionToserver = require('mssql');


const getUsers = async() => {
    try {
        let pool = await sqlConnectionToserver.connect(config);
        let users = pool.request().query("SELECT * FROM UserAuthentication");
        console.log(users);
        return users;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    getUsers
}