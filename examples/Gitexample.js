
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
      paragraph.textContent = 'Logn description of doom';

      // Append the elements to the main element
      gitContentElement.appendChild(title);
      gitContentElement.appendChild(mainHeader);
      gitContentElement.appendChild(paragraph);
    } else {
      console.error('Element with ID "git" not found.');
    }
  });