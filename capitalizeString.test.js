const capitalizeString = require('./capitalizeString.js');

describe('capitalizeString', () => {
    test('capitalizeString', () => {
        expect(capitalizeString('hello')).toBe('Hello');
    });
    test('capitalizeString', () => {
        expect(capitalizeString('good morning')).toBe('Good morning');
    });
    });