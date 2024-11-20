import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {
  
  const markdownFile = '/spitfire-spitsfire/src/content/HTML.md';
  const containerId = 'html-content';
  
  renderMarkdown(markdownFile, containerId);
  });   