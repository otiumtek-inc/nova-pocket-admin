import http from "./axios-anchor.wrapper";

class AuthService {
  async login(user) {
    try {
      const res = await http.post("/api/auth", {
        username: user.username,
        password: user.password,
      });
      return Promise.resolve({ data: res.data, isOk: true });
    } catch (error) {
      return Promise.resolve({ message: error, isOk: false });
    }
  }

  async currentUser() {
    try {
      const res = await http.get("/api/management/user/current");
      return Promise.resolve({ data: res.data, isOk: true });
    } catch (error) {
      return Promise.resolve({ message: error, isOk: false });
    }
  }
}

export default new AuthService();
