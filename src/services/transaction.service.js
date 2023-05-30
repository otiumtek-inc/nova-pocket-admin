import http from './axios-anchor.wrapper';

class TransactionService {
  
  async getTransactions() {
    try {
      const res = await http.get('/api/management/transactions');
      return { data: res.data, isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }
  
}

export default new TransactionService();