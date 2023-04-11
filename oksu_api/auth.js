/* eslint-disable camelcase */
import baseAPI from "./base"


const authAPI = {
  checkLogin: () => baseAPI.get("/user", {}, true),

  login: (user_id, user_pw) => baseAPI.post("/user/login",{ user_id, user_pw },{forceUpdate: true,}),
  postRegister: (data) => baseAPI.post("/user", data),
}

export default authAPI