const stringLength = require('./stringLength.js');

describe('stringLength', () => {
    test('stringLength', () => {
        expect(stringLength('1234567890')).toBe(10);
    });
    test('stringLength', () => {
        expect(stringLength('12345678901')).toBe(11);
    });
    });
