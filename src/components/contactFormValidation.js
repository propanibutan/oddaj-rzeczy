//Does field is blank? If is blank return true.
function isBlank(text) {
    return text.trim().length === 0;
  }

//Does name is one word? If is more than one word, return true.
function isOneWord(text) {
    return text.trim().split(" ").length > 1;
}

//Does field is email? Return true if is correct.
function isEmail(text) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(text);
}

//Does message has min. 120 letters? Return true when min 120 letters.
function hasEnoughLetters(text) {
    const regex2 = /[0-9a-zA-Z]{120,}/;

    return regex2.test(text);
}

export default function contactFormValidation(values) {
    const errorMessages = {};

    if (isBlank(values.name)) {
        errorMessages.name = 'Podane imię jest nieprawidłowe!';
    }

    if (isOneWord(values.name)) {
        errorMessages.name = 'Podane imię jest nieprawidłowe!';
    }

    if (isBlank(values.email)) {
        errorMessages.email = 'Podany email jest nieprawidłowy!';
    }

    if (isEmail(values.email) === false) {
        errorMessages.email = 'Podany email jest nieprawidłowy!';
    }

    if (isBlank(values.message)) {
        errorMessages.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
    }

    if (hasEnoughLetters(values.message) === false) {
        errorMessages.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
    }

    return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}