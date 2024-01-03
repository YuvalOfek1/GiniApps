const valid = { valid: true }
const invalid = { valid: false, message: 'Value cannot be "example".' }


export const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email)? valid : invalid;
};

export const isValidFirstName = (name) => {
    const re = /^[a-zA-Z]{2,12}$/;
    return re.test(name)? valid : invalid;;
};

export const isValidLastName = (lastName) => {
    const re = /^[a-zA-Z]{2,15}$/;
    return re.test(lastName)? valid : invalid;;
}

export const isValidPhonePrefix = (phonePrefix) => {
    const re = /^05[0-8]$/;
    return re.test(phonePrefix)? valid : invalid;;
}

export const isValidPhoneNumber = (phoneNumber) => {
    const re = /^[0-9]{7}$/;
    return re.test(phoneNumber)? valid : invalid;;
}

export const isValidPassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+$/;
    return re.test(password)? valid : invalid;;
}



