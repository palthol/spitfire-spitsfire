
// MODAL LOGIC

document.addEventListener('DOMContentLoaded', () => {

  // Initialize variables that reference the open modal button, close modal button, and the modal inside index.html
  const openModalButton = document.getElementById('openModal');
  const closeModalButton = document.getElementById('closeModal');
  const modal = document.getElementById('modal');

  // show the modal
  openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // hide the modal
  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
});


// BUILD ELEMENT LOGIC


// Create a function that creates a text element and appends it to the DOM
function buildElement(tag, text, className) {
  // Create the element
  const element = document.createElement(tag);

  // Set the text content
  element.textContent = text;

  // Set the class name
  if (className) {
    element.className = className;
  }

  // Return the element
  return element;
}



document.addEventListener("DOMContentLoaded", function() {
  // Function to display visited pages
  function displayVisitedPages() {
    const storedVisitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
    const visitedPagesContainer = document.getElementById('visitedPagesContainer');

    if (visitedPagesContainer) {
      visitedPagesContainer.innerHTML = ''; // Clear existing content
      storedVisitedPages.forEach(page => {
        const pageElement = buildElement('li', page, 'visited-page');
        visitedPagesContainer.appendChild(pageElement);
      });
    }
  }

  // Display visited pages on page load
  displayVisitedPages();

  // Track the current page and store it in localStorage
  const pageName = document.title || window.location.pathname;

  let globalVisitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
  if (!globalVisitedPages.includes(pageName)) {
    globalVisitedPages.push(pageName);
    localStorage.setItem('visitedPages', JSON.stringify(globalVisitedPages));
  }

  // Refresh the displayed visited pages
  displayVisitedPages();
});
