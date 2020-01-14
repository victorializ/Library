import { functions } from './config';

const {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, getAllActiveOrders, finishOrder,  
    login, register, getAllUsers, getCustomers, getCustomersAndManagers, changeRole, 
    getAllGenres, addGenre, newGenre
} = functions;

export {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, getAllActiveOrders, finishOrder,  
    login, register, getAllUsers, getCustomers, getCustomersAndManagers, changeRole, 
    getAllGenres, addGenre, newGenre
};