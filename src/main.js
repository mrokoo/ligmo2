import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3030' // 基础url
axios.defaults.headers.post["Content-Type"] = "application/application/json"; // 统一使用json格式
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  //如果用户信息存在，将用户状态写入request的headers中key为Authorization ；value为localStorage.getItem('Authorer')
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token;
  }
  // 在发送请求之前做些什么    
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).mount('#app')
