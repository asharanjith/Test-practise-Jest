const stringLength= (str) => {
    if (str.length < 1 || str.length > 10) {
        throw new Error('The string must be between 1 and 10 characters');
    }
    return str.length;
    };
module.exports = stringLength;