import { getFullApiUrl } from './getFullApiUrl';

const api = 'https://lab.lectrum.io/react/api';
const GROUP_ID = 'hk0p2r2vfp';

describe('helpers: ', () => {
    test('getFullApiUrl func should be a function', () => {
        expect(typeof getFullApiUrl).toBe('function');
    });

    test('getFullApiUrl func should throw an error if wrong non-string arguments were passed', () => {
        function getFullNameWithError () {
            getFullApiUrl(null, 1);
        }

        expect(getFullNameWithError).toThrowError(
            `'api' and 'GROUP_ID' arguments passed should be a string`
        );
    });

    test('getFullApiUrl func should return fullName string separated by one spase after successful execution', () => {
        expect(getFullApiUrl(api, GROUP_ID)).toBe(`${api}/${GROUP_ID}`);
    });
});
