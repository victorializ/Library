function formatData(order) {
    const { bookingId, 
        book: {
            bookId, 
            name, 
            bookYear
        }, 
        dateOfReturn: date, 
        isFinished 
    } = order;
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