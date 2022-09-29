//Does field is blank? If is blank return true.
function isBlank(text) {
    return text.trim().length === 0;
  }

  export default function step4FormValidation(formValues) {
    const errorMessages = {};


    return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}