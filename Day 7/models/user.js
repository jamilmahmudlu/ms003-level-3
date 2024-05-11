class User {
    constructor(email,fullname,username,password, isActive) {
        this.email = email
        this.fullname = fullname
        this.username = username
        this.password = password
        this.isActive = isActive  // flag
    }
}


module.exports = User;