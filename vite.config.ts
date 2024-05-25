import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { wranglerPagesFunctionsDev } from 'wrangler-pages-functions-dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    wranglerPagesFunctionsDev({
      matchRoutes: /api/,
    }),
    react(),
  ],
})
