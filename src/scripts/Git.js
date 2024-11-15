  //  buildElement is a function inside logic.js
   
        document.addEventListener('DOMContentLoaded', () => {
        // Declare a variable that references the main element
        const mainElement = document.querySelector('#git');

        // Ensure the element exists
        if (mainElement) {

          // create a container for the text elements

          const container = document.createElement('div');
          container.className = 'p-4 text-center rounded-lg shadow-md';

       
          // Create a new title element
        
          const title = buildElement('h1', 'Git', 'text-4xl font-bold text-center m-4');    
          // Create a new header element
       
          const mainHeader = buildElement('h2', 'What is Git?', 'text-2xl font-semibold mb-2');

          // Create a new paragraph element
          const paragraph = buildElement('p', paragraph1, 'text-lg mb-4');

          

          // Append the elements to the main element
          container.appendChild(title);
          container.appendChild(mainHeader);
          container.appendChild(paragraph);

          // append the container to the main element
          mainElement.appendChild(container);
        }else {
          console.error('Element with ID "git" not found.');
     
        }
      });