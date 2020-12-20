import { formatData } from './authors';

const data = [
    {
        "authorId": 1,
        "firstName": "Jane",
        "lastName": "Austen",
        "bookAuthors": []
    },
    {
        "authorId": 2,
        "firstName": "Emily",
        "lastName": "Dickinson",
        "bookAuthors": []
    }
];

describe('authors data formating', () => {
    it('it should format authors data', () => {
        const expectedData = [
            {
                id: 1,
                firstName: 'Jane',
                lastName: 'Austen'
            },
            {
                id: 2,
                firstName: 'Emily',
                lastName: 'Dickinson'
            }
        ];
        expect(formatData(data)).toEqual(expectedData);
    });
});