const User = require("../users/model");

const hashPass =  async (req, res, next) => {
    try {
            console.log("Inside hashPass middlewear function")
            next()

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }
}

module.exports = {
    hashPass
}