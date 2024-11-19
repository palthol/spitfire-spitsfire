  //  buildElement is a function inside logic.js
   

  import { renderMarkdown } from '../components/logic.js';


  document.addEventListener('DOMContentLoaded', () => {
  
  const markdownFile = '../content/js.md';
  const containerId = 'js-content';
  
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
  //   // Declare a variable that references the main element
  //   const mainElement = document.querySelector('#javaScript');

   
  //     // Create a new title element
    
  //     const title = buildElement('h1', 'JavaScript', 'text-4xl font-bold text-center mt-4');    
  //     // Create a new header element
   
  //     const mainHeader = buildElement('h2', 'What is JavaScript?', 'main-header');

  //     // Create a new paragraph element
  //     const paragraph = buildElement('p', 'LALALALALLALALA dfJOfndsnfjdanfjdjfhidoaspHfdophfidoshfiodshfuidsphufdhsuih duszhfuidszhufidshzuifdshzifdhszuifhdsuizhfduiszifdhsuzifohduiszofhdsuizfhudisozhfudi sozhfuidhszufhdsuzfduszfdszhfudzhfudisozhfuidsozfdsuizofhduzfiud', 'paragraph');

  //     // Append the elements to the main element
  //     mainElement.appendChild(title);
  //     mainElement.appendChild(mainHeader);
  //     mainElement.appendChild(paragraph);
 
  //   }
  // );