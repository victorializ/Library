export function formatData(authors) {
    return authors.map(value => {
        const { authorId, firstName, lastName } = value;
        return {
            authorId, 
            firstName,
            lastName
        };
    });
}