const reverseString = require('./reverseString.js');

describe('reverseString', () => {
    test('reverseString', () => {
        expect(reverseString('1234567890')).toBe('0987654321');
    });
    test('reverseString', () => {
        expect(reverseString('12345678901')).toBe('10987654321');
    });
    });