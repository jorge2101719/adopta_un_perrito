import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/jorge2101719/adopta_un_perrito",
  plugins: [react()],
})
