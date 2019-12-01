/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import { Admin } from '../../layout';

const Dashboard = ({ match }) => {
  return <Admin match={match} />;
};

Dashboard.propTypes = {
  match: PropTypes.object.isRequired
};

export default Dashboard;
