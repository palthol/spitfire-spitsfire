import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'src/assets', // Ensure assets are placed in the correct folder

    rollupOptions: {
      input: {
        main: './src/index.html',
        html: './src/html.html',
        git: './src/git.html',
        css: './src/css.html',
        js: './src/js.html'
      }
    }
  },
  base: '/spitfire-spitsfire/' // Ensure correct base path for GitHub Pages
});