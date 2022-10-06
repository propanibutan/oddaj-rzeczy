//Does field is blank? If is blank return true.
// function isBlank(text) {
//     return text.trim().length === 0;
//   }

function isPostCode(text) {
  const regex = /^\d{2}-\d{3}$/;
  return regex.test(text);
}

  export default function step4FormValidation(formValues) {
    const errorMessages = {};

    if (formValues.street.length < 2) {
      errorMessages.street = 'Wpisz co najmniej 2 znaki.'
    }

    if (formValues.city.length < 2) {
      errorMessages.city = 'Wpisz co najmniej 2 znaki.'
    }

    if (isPostCode(formValues.postCode) === false) {
      errorMessages.postCode = 'Podany kod pocztowy jest nieprawidłowy.'
    }


    return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}