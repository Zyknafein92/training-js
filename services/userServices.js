const User = require('../model/userModel');

const users = [
    {email: 'test@gmail.com', password:'1234', account: 500},
    {email: 'test1@gmail.com', password:'4567', account: 1500},
    {email: 'test2@gmail.com', password:'7890', account: 2500},
];

class UserService {

    static login(email, password) {
        const userFound = users.find(u => u.email === email && u.password === password)
        if(userFound) {
            return new User(userFound.email, userFound.password, userFound.account);
        } else {
            return null;
        }
    }

}

module.exports = UserService;
