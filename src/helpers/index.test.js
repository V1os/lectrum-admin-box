import { getUniqueID, getRandomColor } from './index';

describe('helpers-getUniqueID: ', () => {
    test('getUniqueID func should be function type', () => {
        expect(typeof getUniqueID).toBe('function');
    });

    test('should throw an error if wrong non-number arguments were passed', () => {
        expect(() => getUniqueID('some string')).toThrowError(
            'The function argument should be a number!'
        );
    });

    test('check by type result', () => {
        expect(typeof getUniqueID(-1)).toBe('string');
    });

    test('check by unique results for each iteration, 1000000', () => {
        const iterate = new Set();
        let i = 0;

        for (i; i < 100000; i++) {
            iterate.add(getUniqueID());
        }

        expect(i === iterate.size).toBeTruthy();
    });

    test('run without arguments, length string', () => {
        expect(getUniqueID().length).toBe(15);
    });

    test('check for length string', () => {
        expect(getUniqueID(7).length).toBe(7);
    });
});

describe('helpers-getRandomColor: ', () => {
    test('func is color hash?, length, first letter, access letter', () => {
        expect(getRandomColor()).toMatch(/^(#[ABCDF0-9]{6})$/g);
    });

    test('func check by type result', () => {
        expect(typeof getRandomColor()).toBe('string');
    });
});
