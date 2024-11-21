import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {
  
  const markdownFile = './content/css.md';
  const containerId = 'css-content';
  
  renderMarkdown(markdownFile, containerId);
  });     