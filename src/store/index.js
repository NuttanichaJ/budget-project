import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user
//   ? { status: { loggedIn: true }, user }
//   : { status: { loggedIn: false }, user: null };


export default new Vuex.Store({
  state: {
    user: {
      "fName" : "",
      "email": "",
      "userid" : "",
      "depart_id" : "",
      "permission" : "",
      "token" :""

    },
    
  },
  mutations: {
    setUser(state,user){
      state.user = user;
    },
  },
  actions: {

  },
  modules: {
   
  },
  plugins: [createPersistedState(
    // {storage: window.sessionStorage,}
    )]
})
