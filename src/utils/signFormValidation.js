//Does field is blank? If is blank return true.
function isBlank(text) {
    return text.trim().length === 0;
  }

//Does field is email? Return true if is correct.
function isEmail(text) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(text);
}

export default function contactFormValidation(values) {
    const errorMessages = {};

    if (isBlank(values.email)) {
        errorMessages.email = 'Podany email jest nieprawidłowy!';
    }

    if (isEmail(values.email) === false) {
        errorMessages.email = 'Podany email jest nieprawidłowy!';
    }

    if (isBlank(values.password)) {
        errorMessages.password = 'Podane hasło jest za krótkie!';
    }

    if (values.password.length < 6) {
        errorMessages.password = 'Podane hasło jest za krótkie!';
    }

    
    if (values.password2?.length < 6) {
        errorMessages.password2 = 'Podane hasło jest za krótkie!';
    } 

    if (values.password2?.length > 0){
        
        if (values.password !== values.password2) {
        errorMessages.password2 = 'Podane hasła muszą być takie same!';
        } 
    }
    

    return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}