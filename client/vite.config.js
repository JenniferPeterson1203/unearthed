import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // This line tells Vite: "Put the final files in the server's public folder"
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/gifts': {
        target: 'http://localhost:3001'
      }
    }
  }
})