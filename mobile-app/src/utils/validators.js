export const isValidEmail = (email = '') => /\S+@\S+\.\S+/.test(email);

export const isRequired = (value) => String(value ?? '').trim().length > 0;

export const minLength = (value = '', length = 6) => String(value).length >= length;
