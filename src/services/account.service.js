import http from './axios.wrapper';

class AccountService {
  
  async getAccounts() {
    try {
      const res = await http.get('/api/management/accounts');
      return { data: res.data, isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }

  async getPendingAccounts() {
    try {
      const res = await http.get('/api/management/accounts/pending');
      return { data: res.data, isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }

  async getAccount(id) {
    try {
      const res = await http.get(`/api/management/accounts/${id}`);
      return { isOk: true, data: res.data };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }
  
  async getTransactionsByAccount(id) {
    try {
      const res = await http.get(`/api/management/accounts/${id}/transactions`);
      return { isOk: true, data: res.data };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }

  async approveAccount(id) {
    try {
      await http.post(`/api/management/accounts/${id}/approve`);
      return { isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }
  
}

export default new AccountService();