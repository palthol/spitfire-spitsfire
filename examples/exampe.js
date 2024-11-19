// // Imports
// import { marked } from 'marked';

// // 1. FUNCTION TO RENDER MARKDOWN FILES IN HTML  1.
// export async function renderMarkdown(markdownFile, containerId) {
//   try {
//     // Fetch the Markdown file
//     const response = await fetch(markdownFile);

//     // Check if the response is OK, if not, throw an error
//     if (!response.ok) {
//       throw new Error('Failed to fetch ${markdownFile}: ${response.statusText}');
//     }

//     // Get the Markdown content that was fetched
//     const markdown = await response.text();
//     // Call your Markdown-to-HTML function here
//     const markedContent = marked(markdown); 

//     // Inject the HTML content into the specified container
//     const container = document.getElementById(containerId);
//     if (!container) {
//       throw new Error('Container with ID "${containerId}" not found.');
//     }
//     container.innerHTML = markedContent;
//   } catch (error) {
//     console.error(error);
//   }
// }




// // 2. MODAL LOGIC  2.



// // ABOUT MODAL
// document.addEventListener('DOMContentLoaded', () => {

//   // Initialize variables that reference the open modal button, close modal button, and the modal inside index.html
//   const openModalButton = document.getElementById('openModal');
//   const closeModalButton = document.getElementById('closeModal');
//   const modal = document.getElementById('aboutmodal');

//   // show the modal
//   openModalButton.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//   });

//   // hide the modal
//   closeModalButton.addEventListener('click', () => {
//     modal.classList.add('hidden');
//   });

//   // Close the modal when clicking outside of it
//   window.addEventListener('click', (event) => { if (event.target === modal) {modal.classList.add('hidden'); } });});


// // NAME MODAL

// document.addEventListener('DOMContentLoaded', async function () {

//   // Function to get previously viewed pages from local storage
//   async function getPreviouslyViewedPages() {
//       return new Promise((resolve) => {
//           const viewedPages = JSON.parse(localStorage.getItem("viewedPages")) || [];
//           resolve(viewedPages);
//       });
//     }
// }

//   // Initialize logic for the name modal
//   async function initializeNameModalLogic() {
//     const previouslyViewedPages = await getPreviouslyViewedPages();
//     const visitedPagesContainer = document.getElementById("visitedPagesContainer");
//     const modal = document.getElementById("nameModal");
//     const nameSubmitBtn = document.getElementById("nameSubmitBtn");
//     const userNameInput = document.getElementById("userNameInput");
  
//     // Get the user's name from local storage, or use a default value
//     let userName = localStorage.getItem("userName") || "User";
  
//     // Select the header title to update its content dynamically
//     const headerTitle = document.getElementById("headerTitle");
  
//     // **Only show the modal if there are no previously viewed pages and no user name stored in local storage**
//     if ((!previouslyViewedPages || previouslyViewedPages.length === 0) && userName === "User") {
//       // Update header for a new user
//       headerTitle.textContent = `Welcome to the page, ${userName}. You have no previously viewed files!`;
  
//       // Show the modal to get user's name
//       modal.classList.remove("hidden");
  
//       // Add click event to the Submit button
//       nameSubmitBtn.addEventListener("click", function () {
//         const inputName = userNameInput.value.trim();
//         if (inputName) {
//           // Store the user's name in local storage
//           localStorage.setItem("userName", inputName);
//           userName = inputName; // Update local userName variable
  
//           // Hide the modal after entering the name
//           modal.classList.add("hidden");
  
//           // Update the header with personalized name
//           headerTitle.textContent = `Welcome to the page, ${userName}. You have no previously viewed files!`;
//         }
//       });
//     } else {
//       // Update header if there are previously viewed files or user name exists
//       headerTitle.textContent = `Hello ${userName}, these are your previously viewed files`;
//     }
  
//     // Logic to display previously viewed pages
//     if (visitedPagesContainer) {
//       // Clear any existing content before populating dynamically
//       visitedPagesContainer.innerHTML = "";
  
//       if (!previouslyViewedPages || previouslyViewedPages.length === 0) {
//         // If there are no pages, display the "No pages viewed yet!" message
//         const listItem = document.createElement("li");
//         listItem.textContent = "No pages viewed yet!";
//         listItem.classList.add("text-gray-500"); // Optional styling for emphasis
//         visitedPagesContainer.appendChild(listItem);
//       } else {
//         // Populate the list with previously viewed pages
//         previouslyViewedPages.forEach(function (page) {
//           const listItem = document.createElement("li");
//           listItem.textContent = page.title;
//           listItem.classList.add("hover:text-blue-600", "cursor-pointer"); // Optional styling for interaction
//           visitedPagesContainer.appendChild(listItem);
//         });
//       }
//     }
//   }
  
//   // Call the function to initialize the name modal logic
//   document.addEventListener("DOMContentLoaded", async function () {
//     await initializeNameModalLogic();
//   });
 
// // 3. FUNCTION TO BUILD ELEMENTS  3.a
// function buildElement(tag, text, className) {
//   const element = document.createElement(tag);
//   element.textContent = text;
//   if (className) {
//     element.classList.add(className);
//   }
//   return element;
// }


//   // 4. VISITED PAGES LOGIC  4.
  
//   function displayVisitedPages() {
//     const storedVisitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
//     const visitedPagesContainer = document.getElementById('visitedPagesContainer');

//     if (visitedPagesContainer) {
//       visitedPagesContainer.innerHTML = ''; // Clear existing content
//       storedVisitedPages.forEach(page => {
//         const pageElement = buildElement('li', page, '');
//         visitedPagesContainer.appendChild(pageElement);
//       });
//     }
//   }

//   // Function to update visited pages in localStorage
//   function updateVisitedPages(pageName) {
//     // Exclude the home page titled "Spitfire Documentation"
//     if (pageName === "Spitfire Documentation") return;

//     let globalVisitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];

//     // Remove the page if it already exists in the array
//     globalVisitedPages = globalVisitedPages.filter(page => page !== pageName);

//     // Add the page to the beginning of the array
//     globalVisitedPages.unshift(pageName);

//     // Save the updated array to localStorage
//     localStorage.setItem('visitedPages', JSON.stringify(globalVisitedPages));
//   }

//   // Track the current page
//   const pageName = document.title || window.location.pathname;

//   // Update the visited pages in localStorage
//   updateVisitedPages(pageName);

//   // Display the visited pages
//   displayVisitedPages();


//   //  6. FUNCTION TO CHECK IF TAB IS VISIBLE  6.
//   document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'visible') {
//       // Log if the tab is visible
//       console.log('Tab is now in view!');
//     } else {
//       // Log if the tab is hidden
//       console.log('Tab is now hidden!');
//     }
//    });