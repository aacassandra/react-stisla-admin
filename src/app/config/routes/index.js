import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Home, Dashboard } from '../../container/pages';
import { Guard } from '../guard';

const NoMatch = () => {
  return <h2>No match</h2>;
};

class Router extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Guard path="/" exact component={Home} />
            <Guard path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Router;
