export default {
  setIsLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },
  setAuthToken(state, authToken) {
    state.authToken = authToken
  },
  setCurrentUser(state, currentUser) {
    state.currentUser = currentUser
  }
}