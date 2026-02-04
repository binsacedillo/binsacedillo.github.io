// Authentication service with localStorage
export const authService = {
  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  },

  setLoggedIn(value) {
    localStorage.setItem('isLoggedIn', value);
  },

  getUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }
};
