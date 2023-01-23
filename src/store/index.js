import { createStore } from 'vuex'
import Moduleuser from './user';
export default createStore({
  state: {
  },
  getters: {
    fullName(state) {
      return state.user.firstName + state.user.lastName;
    }
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    user: Moduleuser,
  }
})
