  //  buildElement is a function inside logic.js
   
  document.addEventListener('DOMContentLoaded', () => {
    // Declare a variable that references the main element
    const mainElement = document.querySelector('#HTML');

   
      // Create a new title element
    
      const title = buildElement('h1', 'CSS', 'text-4xl font-bold text-center mt-4');    
      // Create a new header element
   
      const mainHeader = buildElement('h2', 'What is CSS', 'main-header');

      // Create a new paragraph element
      const paragraph = buildElement('p', 'LALALALALLALALA', 'paragraph');

      // Append the elements to the main element
      mainElement.appendChild(title);
      mainElement.appendChild(mainHeader);
      mainElement.appendChild(paragraph);
 
    }
  );