import React from "react";
import { Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => (
  <h3>Welcome to the best contact app in the world. ever. always</h3>
);

const Contacts = ({ match }) => (
  <ul>
    <li>Lynn</li>
    <li>Japan Guy</li>
    <li>Jisu Kimchi</li>
    <li>Juan Malakas</li>

    <Route exact={match.path} render={() => <h3>Please select a contact</h3>} />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </ul>
);

const Contact = ({ match }) => JSON.stringify(match);

export default App;
