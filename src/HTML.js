import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {
  
  const markdownFile = '/spitfire-spitsfire/content/HTML.md';
  const containerId = 'html-content';
  
  renderMarkdown(markdownFile, containerId);
  });   