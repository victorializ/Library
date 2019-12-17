import { getAllAuthors, getAuthor, newAuthor, addAuthor } from './authors';
import { getAllBooks, newBook } from './books';
import { getAllOrders, order } from './orders';
import { login, register, getAllUsers, getCustomers, getCustomersAndManagers } from './user';
import { getAllGenres, addGenre } from './genres';

export {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, 
    login, register, getAllUsers, getCustomers, getCustomersAndManagers, 
    getAllGenres, addGenre
}