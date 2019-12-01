/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import { Footer, Header, Sidebar } from '../../../components/molecules/admin';
import Screens from '../../screen';

const Router = props => {
  return (
    <div>
      <Screens.Dashboard
        style={props.match.path !== '/dashboard' ? page.disabled : ''}
        match={props.match}
      />
    </div>
  );
};

const Admin = props => {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <Router match={props.match} />
      <Footer />
    </div>
  );
};

Router.propTypes = {
  match: PropTypes.object.isRequired
};

Admin.propTypes = {
  match: PropTypes.object.isRequired
};

const page = {
  disabled: {
    display: 'none'
  }
};

export default Admin;
