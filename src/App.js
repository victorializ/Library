import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { 
  AuthorsPage, BooksPage, 
  LoginPage, MainPage,
  RegistrationPage, OrdersPage, AdminPage 
} from './pages';
import { Loader } from './components/UITable/Loader';
import { Footer, Header, ErrorBoundary } from './components';

import './assets/styles/style.scss';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
          <div className="app__wrapper">
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/registration' component={RegistrationPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/book' component={BooksPage} />
                <Route path='/author' component={AuthorsPage} />
                <Route path='/admin' component={AdminPage} />
                <Route path='/orders' component={OrdersPage} />
              </Switch>
            </Suspense>
          </div>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
