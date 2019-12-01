import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Ecommerce from './ecommerce';
import General from './general';

const Error404 = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h1>Page Not Found</h1>
      </div>
    </section>
  );
};

const Dashboard = props => {
  return (
    <div className="main-content">
      {/* <section className="section"> */}
      <Route path={`${props.match.path}/ecommerce`} component={Ecommerce} />
      <Route path={`${props.match.path}/general`} component={General} />
      <Route exact path={`${props.match.path}`} component={Error404} />
      {/* </section> */}
    </div>
  );
};

Dashboard.propTypes = {
  match: PropTypes.object.isRequired
};

export default Dashboard;
