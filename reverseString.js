const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new Error('The input must be a string');
    }
    return str.split('').reverse().join('');
};
module.exports = reverseString;