import { getAllAuthors, getAuthor, newAuthor, addAuthor } from './authors';
import { getAllBooks, newBook } from './books';
import { getAllOrders, order, getAllActiveOrders, finishOrder } from './orders';
import { login, register, getAllUsers, getCustomers, getCustomersAndManagers, changeRole } from './user';
import { getAllGenres, addGenre, newGenre } from './genres';

const functions = {
    getAllAuthors, getAuthor, newAuthor, addAuthor, 
    getAllBooks, newBook, 
    getAllOrders, order, getAllActiveOrders, finishOrder,  
    login, register, getAllUsers, getCustomers, getCustomersAndManagers, changeRole, 
    getAllGenres, addGenre, newGenre
};

const logger = func => (...args) => {
    if(typeof func === 'function') {
        console.log(`Function: ${func.name},\nArguments: ${JSON.stringify(args)}`);
    }
    return func(...args);
};

const wrap = (wrapper, functions) => 
    Object.keys(functions).reduce((acc, curr) => {
        return {
            ...acc,
            [curr]: wrapper(functions[curr])
        };
    }, {});

const loggedFunctions = wrap(logger, functions);

export { loggedFunctions as functions };