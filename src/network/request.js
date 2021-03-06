import axios from 'axios'

export function request(config){
  // 1、创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // 2、axios拦截器的设置
  // 2.1、请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {

  })

  // 2.2、响应拦截
  instance.interceptors.response.use(res => {
    return res
  },err => {

  })

  // 3、发送真正的网络请求
  return instance(config)
}