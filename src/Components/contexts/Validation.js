
const VALIDATE = {
    EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
    NUMBER: /[0-9]$/,
    MOBILE: /^[0-9]{1,20}$/,
    STREET: /^[a-zA-Z0-9 '-.~!@#$%^&()_+={}[];':"<>,.\s]$/,
    PASSWORD: /[d\-_\s]+$/,
};


export const isValidForm = (form = {}) => {
    let valid = true;
    for (const field in form) {
        if (Object.hasOwnProperty.call(form, field)) {
            const error = form[field];
            valid = valid && !error;
        }
    }
    return valid;
};




export const validators = {
    checkAlphabet: (name, min, max, value) => {
        var min = min || 2;
        var max = max || 30;
        if (value) {
            if (!VALIDATE.ALPHABET_ONLY.test(value)) {
                return `${name} is Invalid.`;
            } else if (value.length < min || value.length > max) {
                return `${name} must be between ${min} to ${max} Characters.`;
            }
            return null;
        } else {
            return `${name} is Required.`;
        }
    },

    checkEmail: (name, value) => {
        if (value) {
            if (!VALIDATE.EMAIL.test(value)) {
                return `${name} is Invalid.`;
            } else {
                return null
            }
        } else {
            return `${name} is Required.`;
        }
    },

    checkNumber: (name, value) => {

        if (value) {
            if (!VALIDATE.NUMBER.test(value)) {

                return `${name} is Invalid.`;
            }
            return null;
        } else {
            return `${name} is Required.`;
        }
    },

    checkPhoneNumberWithFixLength: (name, max, value) => {
        var max = max || 10;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) {
                return `${name} is Invalid.`;
            } else if (value.length != max) {
                return `${name} should be ${max} digits.`;
            }
            return true;
        } else {
            return `${name} is Required.`;
        }
    },

    checkOptionalPhoneNumberWithFixLength: (name, max, value) => {
        var max = max || 10;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) {
                return `${name} is Invalid.`;
            } else if (value.length != max) {
                return `${name} should be ${max} digits.`;
            }
            return null;
        } else {
            return `${name} is Required.`;
        }
    },

    checkPhoneNumber: (name, value, min, max) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) {
                return `${name} is Invalid.`;
            } else if (value.length < min || value.length > max) {
                return `${name} should be greater than ${min - 1} digits.`;
            }
            return null;
        } else {
            return `${name} is Required.`;
        }
    },

    checkNotNull: (name, min, max, value) => {
        var min = min || 5;
        var max = max || 40;
        if (value) {
            if (value.length < min || value.length > max) {
                return `${name} must be between ${min} to ${max} Characters.`;
            }
            return true;
        } else {
            return `${name} is Required.`;
        }
    },

    checkRequire: (name, value) => {
        if (value) {
            return null;
        } else {
            return ` ${name} is required.  `;
        }
    },
    checkPassword: (name, value, min, max) => {

        if (value) {
            if (VALIDATE.PASSWORD.test(value)) {
                return `${name} is Invalid.`;
            } else if (value.length < min || value.length > max) {
                return `${name} entered must be between ${min} to ${max} Characters.`;
            }
            return null;
        } else {
            return `${name} is Required.`;
        }
    },

    checkMatch: (name, value, name2, value2) => {
        if (value == value2) {
            return null;
        } else {
            return `${name} and ${name2} should be same.`;
        }
    },

    checkStreet: (name, min, max, value) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            if (VALIDATE.STREET.test(value)) {
                return `${name} is Invalid.`;
            } else if (value.length < min || value.length > max) {
                return `${name} entered must be between ${min} to ${max} Characters.`;
            }
            return null;
        } else {
            return `${name} is Required.`;
        }
    },
}