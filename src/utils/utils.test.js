import { sorting } from '../types';
import { compare, compose, getDropdownOptions } from './utils';

describe('utils', () => {
    it('it should compose functions', () => {
        const f1 = x => x + 1;
        const f2 = jest.fn();
        const f = compose(f1, f2)(0);
        expect(f2.mock.calls[0][0]).toBe(1);
    });
    it('it should compare in ascending direction', () => {
        const a = {value: 1};
        const b = {value: 2};
        expect(compare(a, b, sorting.asc, 'value')).toBe(-1);
    });
    it('it should compare in descending direction', () => {
        const a = {value: 1};
        const b = {value: 2};
        expect(compare(a, b, sorting.desc, 'value')).toBe(1);
    });
    it('it should return empty array when there is no options', () => {
        expect(getDropdownOptions(null)).toEqual([]);
    });
    it('it should return mapped options', () => {
        const data = [1, 2];
        const expectedData = [2, 3];
        const mapper = x => x + 1;
        expect(getDropdownOptions(data, mapper)).toEqual(expectedData);
    }); 

});