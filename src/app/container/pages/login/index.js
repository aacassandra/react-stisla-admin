/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import TronLogo from '../../../../assets/img/logo/tron-logo.png';
import BgLogin from '../../../../assets/img/unsplash/tron-unplash.jpg';
import Auth from '../../../config/auth';

export default class Home extends React.Component {
  onLogin() {
    Auth.login(() => {
      window.location.href = '/';
    });
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="d-flex flex-wrap align-items-stretch">
            <div className="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
              <div className="p-4 m-3">
                <img src={TronLogo} alt="tron-logo" height="120" />
                <h4 className="text-dark font-weight-normal mt-3">
                  Welcome to
                  <span className="font-weight-bold"> TRON</span>
                </h4>
                <p className="text-muted">
                  Before you get started, you must login or register if you don't already have an
                  account.
                </p>
                <form method="POST" action="#" className="needs-validation" noValidate>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                      tabIndex="1"
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">Please fill in your email</div>
                  </div>

                  <div className="form-group">
                    <div className="d-block">
                      <label htmlFor="password" className="control-label">
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      tabIndex="2"
                      required
                    />
                    <div className="invalid-feedback">please fill in your password</div>
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="remember"
                        className="custom-control-input"
                        tabIndex="3"
                        id="remember-me"
                      />
                      <label className="custom-control-label" htmlFor="remember-me">
                        Remember Me
                      </label>
                    </div>
                  </div>

                  <div className="form-group text-right">
                    <a href="auth-forgot-password.html" className="float-left mt-3">
                      Forgot Password?
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-icon icon-right"
                      tabIndex="4"
                      onClick={this.onLogin}>
                      Login
                    </button>
                  </div>

                  <div className="mt-5 text-center">
                    Don't have an account?
                    <a href="auth-register.html">Create new one</a>
                  </div>
                </form>

                <div className="text-center mt-5 text-small">
                  Copyright &copy; Your Company. Made with{' '}
                  <span role="img" aria-label="Love">
                    💙
                  </span>{' '}
                  by Stisla
                  <div className="mt-2">
                    <a href="#">Privacy Policy</a>
                    <div className="bullet" />
                    <a href="#">Terms of Service</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 background-walk-y position-relative overlay-gradient-bottom"
              data-background={BgLogin}
            />
          </div>
        </section>
      </div>
    );
  }
}
