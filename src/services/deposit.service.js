import http from './axios-anchor.wrapper';

class DepositService {
  
  async getDeposits() {
    try {
      const res = await http.get('/api/management/deposits');
      return { data: res.data, isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }

  async completeDeposit(id) {
    try {
      await http.post(`/api/management/deposits/${id}/process`);
      return { isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }
  
}

export default new DepositService();