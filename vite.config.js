import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  root: 'src',
  plugins: [
    {
      name: 'vite-plugin-glob-md',
      resolveId(source) {
        if (source === 'virtual:md-files') {
          return source;
        }
        return null;
      },
      load(id) {
        if (id === 'virtual:md-files') {
          const mdDir = path.resolve(__dirname, 'src/content');
          if (!fs.existsSync(mdDir)) {
            console.warn(`[vite-plugin-glob-md] Warning: Markdown directory not found: ${mdDir}`);
            return 'export default [];';
          }
          const mdFiles = fs
            .readdirSync(mdDir)
            .filter((file) => file.endsWith('.md'))
            .map((file) => {
              const filePath = path.join(mdDir, file);
              const content = fs.readFileSync(filePath, 'utf-8');
              return { file, content };
            });

          return `export default ${JSON.stringify(mdFiles)};`;
        }
      }
    },
    {
      name: 'include-md-files',
      apply: 'build',
      generateBundle(_, bundle) {
        const mdDir = path.resolve(__dirname, 'src/content');
        if (fs.existsSync(mdDir)) {
          const mdFiles = fs.readdirSync(mdDir).filter((file) => file.endsWith('.md'));

          mdFiles.forEach((file) => {
            const filePath = path.resolve(mdDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');

            // Add the file to the build output
            this.emitFile({
              type: 'asset',
              fileName: `content/${file}`, // Copy to 'content' folder in output
              source: content,
            });
          });
        } else {
          console.warn(`[include-md-files] Warning: Markdown directory not found for inclusion: ${mdDir}`);
        }
      },
    }
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'src/assets',
    rollupOptions: {
      input: {
        main: './src/index.html',
        html: './src/html.html',
        git: './src/git.html',
        css: './src/css.html',
        js: './src/js.html',
      }
    }
  },
  optimizeDeps: {
    include: ['marked'], // Pre-bundle Marked.js
  },
  base: '/spitfire-spitsfire/',
});
