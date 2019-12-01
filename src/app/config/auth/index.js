/* eslint-disable class-methods-use-this */
class Auth {
  login(cb) {
    localStorage.setItem('login', true);
    cb();
  }

  logout(cb) {
    localStorage.removeItem('login');
    cb();
  }

  isAuthenticated() {
    const login = localStorage.getItem('login');
    if (login) {
      return true;
    }
    return false;
  }
}

export default new Auth();
