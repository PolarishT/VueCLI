import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://AllianceTing/api',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'authentication' }
})
axios.defaults.withCredentials = true
axiosInstance.interceptors.request.use(
  function (config) {
    console.log('PING')
    return config
  },
  function (error) {
    console.error('request error', error)
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    console.log('PONG')
    // 2xx 范围内的状态码都会触发该函数。
    const data = response.data
    if (data.code <= 200) {
      console.log(response.data)
      return data.data
    }
    console.error('response error', data)
    return response.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error)
  }
)
export default axiosInstance
