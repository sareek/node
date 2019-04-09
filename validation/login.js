const Validator = require('validator');
const isEmpty = require('./is-empty')

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email:'';
    data.password = !isEmpty(data.password) ? data.password:'';


    if(Validator.isEmpty(data.email)) {
        console.log('ssss')
        errors.email = 'Email field is required'
    }

    if(!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
        console.log(data.email,'???')
        errors.email = 'Email invalid'
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}