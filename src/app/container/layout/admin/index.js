/* eslint-disable no-console */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Sidebar } from '../../../components/molecules/admin';

const Carnitas = () => {
  return <div>Hello Carnitas</div>;
};

const Admin = ({ match }) => {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <Route path="/dashboard/coba" component={Carnitas} />
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

Admin.propTypes = {
  match: PropTypes.object.isRequired
};

export default Admin;
