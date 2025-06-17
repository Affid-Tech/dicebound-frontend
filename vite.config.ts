import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Прокси для всех запросов на /api → твой Spring Boot
      '/api': 'http://localhost:8081', // или порт, где у тебя бекенд
    },
  },
})
