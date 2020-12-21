import { functions } from './config';

const {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, getAllActiveOrders, finishOrder,  
    login, register,
    getAllGenres, addGenre, newGenre
} = functions;

export {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, getAllActiveOrders, finishOrder,  
    login, register,
    getAllGenres, addGenre, newGenre
};