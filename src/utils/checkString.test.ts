import { describe, expect, test } from '@jest/globals';

import { checkString } from './checkString';

describe('check that value is string', () => {
    test('string', () => {
        expect(checkString('privet')).toBe(true);
    });
    test('undefined', () => {
        expect(checkString()).toBe(false);
    });
    test('number', () => {
        expect(checkString(5)).toBe(false);
    });
});
