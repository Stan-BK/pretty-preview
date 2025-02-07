import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  console.log(env)
  return {
    plugins: [vue()],
    base: env.VITE_APP_PATHNAME,
  }
})
