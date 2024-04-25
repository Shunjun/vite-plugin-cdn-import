import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importToCDN, { autoComplete } from '../../dist'
console.log('>>>>', process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        importToCDN({
            enableInDevMode: true,
            modules: [autoComplete(['vue', 'vue-router'])],
        }),
    ],
})
