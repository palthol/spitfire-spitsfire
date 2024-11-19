import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',    // Keep the output folder as '../dist' if you prefer to have the build at the root level
    emptyOutDir: true     // This will ensure the dist folder is cleared on every build
  }
})