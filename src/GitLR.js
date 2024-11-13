document.addEventListener('DOMContentLoaded', () => {
    // Select the main element
    const gitContentElement = document.querySelector('#git');
  
    // Create a new title element
    const title = document.createElement('h1');
    title.className = 'p-4 mb-4 text-6xl font-bold';
    title.textContent = 'Git';
  
    // Create a new header element
    const mainHeader = document.createElement('h2');
    mainHeader.className = 'p-4 mb-2 text-2xl font-semibold';
    mainHeader.textContent = 'Git is a distributed version control system';
  
    // Create a new paragraph element
    const paragraph = document.createElement('p');
    paragraph.className = 'p-4 mb-4 text-lg';
    paragraph.textContent = 'Git is a distributed version control system that allows multiple developers to collaborate on a project. It is widely used in the software development industry and is an essential tool for any developer. Git is open-source and free to use, making it accessible to everyone.';
  
    // Append the elements to the main element
    gitContentElement.appendChild(title);
    gitContentElement.appendChild(mainHeader);
    gitContentElement.appendChild(paragraph);
    document.addEventListener('DOMContentLoaded', () => {
        // Select the main element
        const gitContentElement = document.querySelector('#git');
      
        // Ensure the element exists
        if (gitContentElement) {
          // Create a new title element
          const title = document.createElement('h1');
          title.className = 'mb-4 text-6xl font-bold';
          title.textContent = 'Git';
      
          // Create a new header element
          const mainHeader = document.createElement('h2');
          mainHeader.className = 'mb-2 text-2xl font-semibold';
          mainHeader.textContent = 'Git is a distributed version control system';
      
          // Create a new paragraph element
          const paragraph = document.createElement('p');
          paragraph.className = 'mb-4 text-lg';
          paragraph.textContent = 'Git is a distributed version control system that allows multiple developers to collaborate on a project. It is widely used in the software development industry and is an essential tool for any developer. Git is open-source and free to use, making it accessible to everyone.';
      
          // Append the elements to the main element
          gitContentElement.appendChild(title);
          gitContentElement.appendChild(mainHeader);
          gitContentElement.appendChild(paragraph);
        } else {
          console.error('Element with ID "git" not found.');
        }
      });
  });