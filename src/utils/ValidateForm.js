export default function ValidateForm(data) {
    const { firstName, lastName, email } = data;
    
    let errors = {};

    if(!firstName.trim().length) {
      errors.firstNameError = "First name is required";
    }

    if(!lastName.trim().length) {
      errors.lastNameError = "Last name is required";
    }

    if(!email.trim().length) {
      errors.emailError = "Email is required";
    }
    else if(!_validateEmail(email)) {
      errors.emailError = "Invalid email address";
    }

    return errors;
}

function _validateEmail(email) {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if(!pattern.test(email.trim())) {
      return false;
    }

    return true;
}