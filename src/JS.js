import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {
  
  const markdownFile = '/spitfire-spitsfire/src/content/js.md';
  const containerId = 'js-content';
  
  renderMarkdown(markdownFile, containerId);
  });     