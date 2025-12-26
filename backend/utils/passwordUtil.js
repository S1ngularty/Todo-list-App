const passwordValidator = require("password-validator")

 var passwordSchema = new passwordValidator()

 passwordSchema
    .is().min(8)
    .is().max(100)
    .has().lowercase()
    .has().digits(2)
    .has().not().spaces()

module.exports = passwordSchema