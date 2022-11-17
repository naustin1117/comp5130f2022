const config            = require('./dbConfig'),
sqlConnectionToserver = require('mssql'),
bcrypt = require('bcrypt');


const getUser = async(User) => {
    try {
        let pool = await sqlConnectionToserver.connect(config);
        let user = await pool.request().query(`SELECT * FROM UserAuthentication WHERE Email = '${User.Email}'`);
        return user;
    }
    catch(error) {
        console.log(error);
    }
}
const createUser = async(User) => {
    try {
        let hash = await bcrypt.hash(User.Password,10);
        console.log(hash.length);
        let response = await bcrypt.compare('123456',hash);
        console.log(response);
        let pool = await sqlConnectionToserver.connect(config);
        let users = await pool.request().query(`INSERT INTO UserAuthentication VALUES (${User.UserID},'${User.Username}','${User.Email}','${hash}')`);
        console.log(users);
        return users;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUser
}