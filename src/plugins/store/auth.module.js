import AuthService from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { loggedIn: true, user }
  : { loggedIn: false, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then((res) => {
        if (res.isOk) {
          commit("loginSuccess", res.data);
          return Promise.resolve(res.data);
        } else {
          commit("loginFailure");
          return Promise.reject(res.message);
        }
      });
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
};
