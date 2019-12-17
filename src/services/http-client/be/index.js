import { getAllAuthors, getAuthor, newAuthor, addAuthor } from './authors';
import { getAllBooks, newBook } from './books';
import { getAllOrders, order, getAllActiveOrders, finishOrder } from './orders';
import { login, register, getAllUsers, getCustomers, getCustomersAndManagers, changeRole } from './user';
import { getAllGenres, addGenre, newGenre } from './genres';

export {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, getAllActiveOrders, finishOrder, 
    login, register, getAllUsers, getCustomers, getCustomersAndManagers, changeRole,
    getAllGenres, addGenre, newGenre
}
