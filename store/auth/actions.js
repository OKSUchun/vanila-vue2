// import baseAPI from "~/oksu_api/base"
import authAPI from "~/oksu_api/auth"

import { clearTokenFromLocalStorage,clearTokenFromCookie, clearTokenFromSessionStorage } from "~/util/authToken"
import { generateHashedPassword } from "~/util/encryption"

export default {
  /* 로그인 요청 */
  loginRequest: ({ commit }, { id, pw }) => {

    const hashedPassword = generateHashedPassword(pw)

    return new Promise((resolve, reject) => {
      authAPI
        .login(id, hashedPassword)
        .then((response) => {
          commit("setIsLoggedIn", true)
          commit("setAuthToken", response.token)
          resolve(response.token)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /* 로그아웃 요청 */
  logoutRequest: ({ commit }) => {
    clearTokenFromLocalStorage()
    clearTokenFromCookie()
    clearTokenFromSessionStorage()

    window.location.href = "/"
  },

  /* 유저 로그인 여부 파악 + 권한 가져오기 */
  loginStatusRequest: ({ commit }) => {
    return new Promise((resolve, reject) => {
      authAPI
        .checkLogin()
        .then((response) => {
            // console.log(response);
          commit("setIsLoggedIn", true)

          /* 현재 로그인한 유저의 정보 가져오기 */
          commit("setCurrentUser", response.result)
          resolve()
        })
        .catch((err) => {
          commit("setIsLoggedIn", false)
          reject(err)
        })
    })
  },
}