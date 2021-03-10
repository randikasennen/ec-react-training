export default function ValidateForm(data) {
    const { firstName, lastName, email } = data;
    
    let errors = {
        firstNameError: null,
        lastNameError: null,
        emailError: null
    };

    let validity = true;

    if(!firstName.trim().length) {
      errors.firstNameError = "First name is required";
      validity = false;
    }

    if(!lastName.trim().length) {
      errors.lastNameError = "Last name is required";
      validity = false;
    }

    if(!email.trim().length) {
      errors.emailError = "Email is required";
      validity = false;
    }
    else if(!_validateEmail(email)) {
      errors.emailError = "Invalid email address";
      validity = false;
    }

    return [errors, validity];
}

function _validateEmail(email) {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if(!pattern.test(email.trim())) {
      return false;
    }

    return true;
}