// Imports
import { marked } from 'marked';

// 1. FUNCTION TO RENDER MARKDOWN FILES IN HTML  1.
export async function renderMarkdown(markdownFile, containerId) {
  try {
    // Fetch the Markdown file
    const response = await fetch(markdownFile);

    // Check if the response is OK, if not, throw an error
    if (!response.ok) {
      throw new Error(`Failed to fetch ${markdownFile}: ${response.statusText}`);
    }

    // Get the Markdown content that was fetched
    const markdown = await response.text();
    // Call your Markdown-to-HTML function here
    const markedContent = marked(markdown); 

    // Inject the HTML content into the specified container
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with ID "${containerId}" not found.`);
    }
    container.innerHTML = markedContent;
  } catch (error) {
    console.error(error);
  }
}




// 2. MODAL LOGIC  2.

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


// 3. BUILD ELEMENT LOGIC  3.


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



// 4. BUILD ELEMENT LOGIC  4.
document.addEventListener("DOMContentLoaded", function () {
  // Function to create an element with a class and text content
  function buildElement(tag, textContent, className) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    if (className) {
      element.classList.add(className);
    }
    return element;
  }


  // 5. VISITED PAGES LOGIC  5.
  
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

  // Function to update visited pages in localStorage
  function updateVisitedPages(pageName) {
    // Exclude the home page titled "Spitfire Documentation"
    if (pageName === "Spitfire Documentation") return;

    let globalVisitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];

    // Remove the page if it already exists in the array
    globalVisitedPages = globalVisitedPages.filter(page => page !== pageName);

    // Add the page to the beginning of the array
    globalVisitedPages.unshift(pageName);

    // Save the updated array to localStorage
    localStorage.setItem('visitedPages', JSON.stringify(globalVisitedPages));
  }

  // Track the current page
  const pageName = document.title || window.location.pathname;

  // Update the visited pages in localStorage
  updateVisitedPages(pageName);

  // Display the visited pages
  displayVisitedPages();
});

  //  6. FUNCTION TO CHECK IF TAB IS VISIBLE  6.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // Log if the tab is visible
      console.log('Tab is now in view!');
    } else {
      // Log if the tab is hidden
      console.log('Tab is now hidden!');
    }
   });