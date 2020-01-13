import { lazy } from 'react';

import { Login } from "./Login";
import { Main } from "./Main";
import { Registration } from "./Registation";
import { UserOrders } from "./Orders";

const AdminPage = lazy(() => import('./Admin'));
const BooksPage = lazy(() => import('./Books'));
const AuthorsPage = lazy(() => import('./Authors'));

export { 
    AdminPage, 
    AuthorsPage, 
    BooksPage, 
    Login as LoginPage,
    Main as MainPage, 
    Registration as RegistrationPage, 
    UserOrders as OrdersPage
};