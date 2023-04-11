/* axios 초기 세팅 */
import axios from "axios"
import qs from "qs"
import { cacheAdapterEnhancer } from "axios-extensions"
import config from "~/config/index"
import { loadTokenFromStorage } from "~/util/authToken"

/* axios 공통 config */
const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: config.API_URL,
  timeout: config.API_TIMEOUT,
  headers: { "Cache-Control": "no-cache" },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
})

/* axios interceptors - request */
axiosInstance.interceptors.request.use(
  (request) => {
    const authToken = loadTokenFromStorage()

    // 저장된 token이 있으면 불러와서 request에 Authorization token 첨부
    if (authToken) request.headers.Authorization = `Bearer ${authToken}`
   
    console.log(request);

    return request
  },
  (error) => Promise.reject(error)
)

/* axios interceptors - response */
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorCode = error.response?.status
    console.log(errorCode);

    return Promise.reject(error)
  }
)

/* baseAPI 정의 */
const baseAPI = {
  get: (url, params, forceUpdate = false, arrayFormat = "repeat", config) =>
    axiosInstance.get(url, {
      forceUpdate,
      params,

      // [1,2,3] 형태의 배열을 "1,2,3" 형태로 stringify한 후 전송
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat }),
      ...config,
    }),
  post: (url, data, config) => axiosInstance.post(url, data, config),
  put: (url, data, config) => axiosInstance.put(url, data, config),
  delete: (url, params) => axiosInstance.delete(url, { data: { ...params } }),
}

export default baseAPI