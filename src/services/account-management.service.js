import http from './axios.wrapper';

class AccountManagementService {
  getPublicContent() {
    return http.get('all');
  }

  getUserBoard() {
    return http.get('user');
  }

  getModeratorBoard() {
    return http.get('mod');
  }

  getAdminBoard() {
    return http.get('admin');
  }
}

export default new AccountManagementService();