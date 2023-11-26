// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // ...other configuration options...

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Replace with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
