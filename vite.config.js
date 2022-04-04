import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // server: {
  //   host: '192.168.1.103' // 在手机客户端访问
  // }
  // base:'./', // 添加这个属性
  // assetsDir: 'assets',
})
