import http from './axios-backend.wrapper';

class LandingService {
  
  async getLandingInfo() {
    try {
      const res = await http.get(`/api/posts?locale=${localStorage.getItem("user-locale") || 'es'}&populate=*`);
      return { data: res.data, isOk: true };
    } catch (error) {
      return { message: error, isOk: false };
    }
  }
  
}

export default new LandingService();