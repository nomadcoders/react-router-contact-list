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
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => (
  <h3>Welcome to the best contact app in the world. ever. always</h3>
);

const Contacts = () => (
  <ul>
    <li>Lynn</li>
    <li>Japan Guy</li>
    <li>Jisu Kimchi</li>
    <li>Juan Malakas</li>
  </ul>
);

export default App;
