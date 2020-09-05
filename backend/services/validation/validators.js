const Validators = require('validator');
const isEmpty = require('is-empty');

const loginValidator =  (data) => {
    const errors = {}
    
    data.email = !(isEmpty(data.email)) ? data.email:"";
    data.password = !isEmpty(data.password) ? data.password:"";

    if(Validators.isEmpty(data.email)){
        errors.email = "Email is required. Can't be empty!"
    }
    if(!Validators.isEmail(data.email)){
        errors.email = "Email is invalid. Please provide valid email address!";
    }

    if(Validators.isEmpty(data.password)){
        errors.password = "Please provide passowrd!";
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
}

const  registerValidator =  (data) => {

    let errors = ""
    data.email = !(isEmpty(data.email)) ? data.email:"";
    data.password = !isEmpty(data.password) ? data.password:"";
    data.username = !(isEmpty(data.username)) ? data.username : "";
    if(Validators.isEmpty(data.email)){
        errors = "Email is required. Can't be empty!"
    } else
    if(Validators.isEmpty(data.username)){
        errors = "Username is required. Can't be empty!"
    } else
    if(!Validators.isEmail(data.email)){
        errors = "Email is invalid. Please provide valid email address!";
    } else
    if(Validators.isEmpty(data.password)){
        errors = "Please provide passowrd!";
    }
    return {
        errors:errors,
        isValid:isEmpty(errors)
    };
    
}

module.exports = {loginValidator, registerValidator}