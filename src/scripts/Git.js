  //  buildElement is a function inside logic.js
   
  import { renderMarkdown } from '../components/logic.js';


  document.addEventListener('DOMContentLoaded', () => {

  const markdownFile = '../content/git.md';
  const containerId = 'git-content';

  renderMarkdown(markdownFile, containerId);
  });     
  
    //Function to show if the tab is visible or hidden
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // Log if the tab is visible
        console.log('Tab is now in view!');
      } else {
        // Log if the tab is hidden
        console.log('Tab is now hidden!');
      }
     });
     
     //Function to show if the mouse is over the document
     document.addEventListener('mouseover', (event) => {
      // Check if the mouse is over the document
       if (event.target.matches('hover:underline')) {
          // Log if the mouse is over the document
         console.log('Mouse is over the document!');
       }
     });
  
  // document.addEventListener('DOMContentLoaded', () => {
        // Declare a variable that references the main element
        // const mainElement = document.querySelector('#git-content');

        // // Ensure the element exists
        // if (mainElement) {

        //   // create a container for the text elements

        //   const container = document.createElement('div');
        //   container.className = 'p-4 text-center rounded-lg shadow-md';

       
        //   // Create a new title element
        
        //   const title = buildElement('h1', 'Git', 'text-4xl font-bold text-center m-4');    
        //   // Create a new header element
       
        //   const mainHeader = buildElement('h2', 'What is Git?', 'text-2xl font-semibold mb-2');

        //   // Create a new paragraph element
        //   const paragraph = buildElement('p', paragraph1, 'text-lg mb-4');

          

        //   // Append the elements to the main element
        //   container.appendChild(title);
        //   container.appendChild(mainHeader);
        //   container.appendChild(paragraph);

        //   // append the container to the main element
        //   mainElement.appendChild(container);
        // }else {
        //   console.error('Element with ID "git" not found.');
     
      //   }
      // });