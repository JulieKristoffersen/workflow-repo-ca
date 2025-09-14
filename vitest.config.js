import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['vitest/**/*.test.js'],       
    exclude: ['tests/**/*.e2e.test.js'],    
    environment: 'jsdom',                   
    globals: true,                          
  },
})
