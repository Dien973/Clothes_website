const db = require('../config/conectdb');

//Model for user 
const userModel = {

    getUserData: (username) => {
        return db('users').select('*').where({ user_name: username }).first();
    },

    getUsername: (username) => {
        return db('users').where({ user_name: username }).first();
    },

    getEmail: (email) => {
        return db('users').where({ user_email: email }).first();
    },

    getAddress: (address) => {
        return db('users').where({ user_address: address }).first();
    },

    getPassword: (username) => {
        return db('users')
            .select('user_password')
            .where({ user_name: username })
            .first()
            .then(result => result.user_password);
    },
    
    signup: (username, address, password, email) => {
        return db('users').insert({
            user_name: username,
            user_address: address,
            user_password: password,
            user_email: email,
        })
    },

    signin: (username, password) => {
        return db('users')
       .where({ user_name: username })
    }
}

module.exports = userModel;
