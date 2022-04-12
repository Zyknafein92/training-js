class User {

    constructor(email,password, account) {
        this._email = email;
        this._password = password;
        this._account = account;
    }


    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get account() {
        return this._account;
    }

    set account(value) {
        this._account = value;
    }
}

module.exports = User;
