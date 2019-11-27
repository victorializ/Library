import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AdminPage, AuthorsPage, BooksPage, LoginPage, MainPage, RegistrationPage } from './pages';
import { Footer, Header } from './components';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <div className="page__wrapper">
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/registration' component={RegistrationPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/book' component={BooksPage} />
          <Route path='/author' component={AuthorsPage} />
          <Route path='/admin' component={AdminPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
