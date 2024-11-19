import { renderMarkdown } from './main.js';


  document.addEventListener('DOMContentLoaded', () => {

  const markdownFile = './content/git.md';
  const containerId = 'git-content';

  renderMarkdown(markdownFile, containerId);
  });     