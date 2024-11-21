import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {
  
  const markdownFile = './content/html.md';
  const containerId = 'html-content';
  
  renderMarkdown(markdownFile, containerId);
  });   