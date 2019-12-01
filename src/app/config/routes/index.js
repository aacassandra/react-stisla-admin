import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import { Login } from '../../container/pages';
// import Layout from '../../container/layout/admin';
// import { Guard } from '../guard';

class Router extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={ListView} />
            <Route path="/user/:name" component={DetailView} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

function Home(params) {
  return <h2>Halaman Home</h2>;
}

function ListView(params) {
  return (
    <div>
      <h2>Semua Users</h2>
      <ul>
        <Link to="/user/hilman">Hilman</Link>
        <br />
        <Link to="/user/robert">Robert</Link>
      </ul>
    </div>
  );
}

function DetailView({ match }) {
  return <h2>Ini halaman {match.params.name}</h2>;
}

function NoMatch(params) {
  return <h2>404, Halaman tidak ditemukan</h2>;
}

export default Router;
