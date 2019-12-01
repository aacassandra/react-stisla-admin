import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <div className="col-12">Ini Halaman Dash</div>
          </div>
        </section>
      </div>
    );
  }
}
