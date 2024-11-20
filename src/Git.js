import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {

  const markdownFile = '/spitfire-spitsfire/src/content/git.md';
  const containerId = 'git-content';

  renderMarkdown(markdownFile, containerId);
  });     