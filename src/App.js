import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthorsPage, BooksPage, LoginPage, MainPage, RegistrationPage, OrdersPage } from './pages';
import { Footer, Header } from './components';

import './assets/styles/style.scss';

function App() {
  return (
    <Router>
      <Header />
      <div className="app__wrapper">
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/registration' component={RegistrationPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/book' component={BooksPage} />
          <Route path='/author' component={AuthorsPage} />
          {/*<Route path='/admin' component={AdminPage} />*/}
          <Route path='/orders' component={OrdersPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
