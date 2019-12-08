function formatData(order) {
    const { bookingId, book: {bookId, name, bookYear}, date, isFinished} = order;
    return {
        id: bookingId, 
        bookId,
        name, 
        bookYear,
        date, 
        isFinished
    };
}

export { formatData };