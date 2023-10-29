import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default {
  server: {
    proxy: {
      '/api':'http://localhost:5000',
    },
  },
  plugins: [react()],
};
