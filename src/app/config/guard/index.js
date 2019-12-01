/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../auth';

export const Guard = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location
              }
            }}
          />
        );
      }}
    />
  );
};
