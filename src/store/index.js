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
      "name" : "",
      "email": "",
      "userid" : "",
      "depart_id" : "",
      "permission" : ""

    },
    // userID :{
    //   'userid':'',
    //   'depart_id':'',
    //   'permission':''
    // }
    // loginUser: user
    
  },
  mutations: {
    setUser(state,user){
      state.user = user;
    },
    // setUserID(state, user) {
    //   state.userID = user;
    // },
    // loginSuccess(state, user) {
    //   state.status.loggedIn = true;
    //   state.user = user;
    // },
    // loginFailure(state) {
    //   state.status.loggedIn = false;
    //   state.user = null;
    // },
    logout(state) {
      
      state.status.setUserInfo = false;
      state.status.setUserID = false;
      state.user = null;
      localStorage.removeItem('user')
    }
  },
  actions: {

  },
  modules: {
    // auth
   
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
