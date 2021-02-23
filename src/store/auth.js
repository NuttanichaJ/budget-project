const auth = {
    namespaced: true,
  
    state() {
      return {
        isLoggedIn: null,
      };
    },
  
    mutations: {
      logIn(state) {
        state.isLoggedIn = true;
      },
  
      logOut(state) {
        state.isLoggedIn = false;
      },
    },
  
    actions: {
      loadInitialState(context) {
        window.gapi.auth2.getAuthInstance().isSignedIn.get()
          ? context.commit('logIn')
          : context.commit('logOut');
      },
  
      logIn() {
        window.gapi.auth2.getAuthInstance().signIn();
      },
  
      logOut() {
        window.gapi.auth2.getAuthInstance().signOut();
      },
    },
  };
  
export default auth;