import Cookies from "js-cookie"

export const saveTokenToCookie = (item) => {
  const parsedToken = item.substring(7)

  return Cookies.set("token", parsedToken)
}
export const clearTokenFromLocalStorage = () => localStorage.removeItem("token")
export const clearTokenFromSessionStorage = () => sessionStorage.removeItem("token")
export const saveTokenToSessionStorage = (item) => {
  const parsedToken = item.substring(7)
  console.log(parsedToken);
  return sessionStorage.setItem("token", parsedToken)
}
export const clearTokenFromCookie = () => Cookies.remove("token")
export const loadTokenFromStorage = () => {
  /* 자동 로그인 시 localStorage 에 토큰 저장. 만료 될 가능성이 있는 localStorage 를 맨 끝에 위치 */
  return Cookies.get("token") || sessionStorage.getItem("token") || localStorage.getItem("token")
}