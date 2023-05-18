import AuthService from "@/services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { loggedIn: true, user }
  : { loggedIn: false, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    currentUser({ commit }) {
      return AuthService.currentUser().then((res) => {
        if (res.isOk) {
          commit("loginSuccess", res.data);
          return Promise.resolve(res.data);
        } else {
          commit("loginFailure");
          return Promise.reject(res.message);
        }
      });
    },
    login({ commit, dispatch }, user) {
      return AuthService.login(user).then((res) => {
        if (res.isOk) {
          commit('saveToken', res.data)
          dispatch('currentUser')
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
    saveToken(state, auth) {
      localStorage.setItem("auth", JSON.stringify(auth));
    },
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
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    },
  },
  getters: {
    user (state) {
      return state.user
    }
  }
};
