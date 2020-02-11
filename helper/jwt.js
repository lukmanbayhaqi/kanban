const jwt = require('jsonwebtoken')
const SECRET = 'SECRET'
module.exports = {
    createToken: (email) => {
        return jwt.sign({ email }, SECRET)
    },
    verifyToken: (token) => {
        try {
            return jwt.verify(token, SECRET)
        } catch (err) {
            console.log(err,'error verify')
        }
    }
}