import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {

  const markdownFile = '/spitfire-spitsfire/content/git.md';
  const containerId = 'git-content';

  renderMarkdown(markdownFile, containerId);
  });     