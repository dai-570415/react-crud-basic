import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Index from './components/Index';
import userIndex from './components/users/Index';
import userCreate from './components/users/Create';
import userDetail from './components/users/Detail';
import page404 from './components/page404';

// components/elements
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/users/" component={userIndex} />
            <Route exact path="/users/create/" component={userCreate} />
            <Route exact path="/users/detail/:uid" component={userDetail} />
            <Route exact path="/404" component={page404} />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;