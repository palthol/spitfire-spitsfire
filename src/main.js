// Imports
import { marked } from 'marked';
// exports
export { renderMarkdown };


    // 1. FUNCTION TO RENDER MARKDOWN FILES IN HTML
   async function renderMarkdown(markdownFile, containerId) {
        try {
            const response = await fetch(markdownFile);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${markdownFile}: ${response.statusText}`);
            }
            const markdown = await response.text();
            const markedContent = marked(markdown);

            const container = document.getElementById(containerId);
            if (!container) {
                throw new Error(`Container with ID "${containerId}" not found.`);
            }
            container.innerHTML = markedContent;
        } catch (error) {
            console.error(error);
        }
    }

    document.addEventListener("DOMContentLoaded", async function () {

        // Initialize the Name Modal logic
    await initializeNameModalLogic();

        // Update and Display Visited Pages
    const pageName = document.title || window.location.pathname;
    updateVisitedPages(pageName);
    
    const updatedPages = JSON.parse(localStorage.getItem('viewedPages')) || [];
    displayVisitedPages(updatedPages);



    // 2. MODAL LOGIC
    // ABOUT MODAL
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const aboutModal = document.getElementById('aboutmodal');

    // Show the About modal
    if (openModalButton && closeModalButton && aboutModal) {
        openModalButton.addEventListener('click', () => {
            aboutModal.classList.remove('hidden');
        });

        closeModalButton.addEventListener('click', () => {
            aboutModal.classList.add('hidden');
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === aboutModal) {
                aboutModal.classList.add('hidden');
            }
        });
    }

    // 3. NAME MODAL LOGIC
    async function initializeNameModalLogic() {
      const previouslyViewedPages = JSON.parse(localStorage.getItem("viewedPages")) || [];
      const nameModal = document.getElementById("nameModal");
      const nameSubmitBtn = document.getElementById("nameSubmitBtn");
      const userNameInput = document.getElementById("userNameInput");
      const headerTitle = document.getElementById("headerTitle");
  
      // Debugging: check if the elements are being accessed correctly
      console.log('headerTitle:', headerTitle);
  
      if (!headerTitle) {
          console.error("Element with ID 'headerTitle' was not found in the DOM.");
          return; // Prevent further execution to avoid setting properties of null
      }
  
      let userName = localStorage.getItem("userName") || "User";
  
      if ((!previouslyViewedPages || previouslyViewedPages.length === 0) && userName === "User") {
          headerTitle.textContent = `Welcome to the page, ${userName}. You have no previously viewed files!`;
          nameModal.classList.remove("hidden");
  
          nameSubmitBtn.addEventListener("click", function () {
              const inputName = userNameInput.value.trim();
              if (inputName) {
                  localStorage.setItem("userName", inputName);
                  userName = inputName;
                  nameModal.classList.add("hidden");
                  headerTitle.textContent = `Welcome to the page, ${userName}. You have no previously viewed files!`;
              } else {
                  alert("Please enter your name to continue.");
              }
          });
      } else {
          headerTitle.textContent = `Hello ${userName}, these are your previously viewed files`;
      }
  
      // Call displayVisitedPages to update the UI
      displayVisitedPages(previouslyViewedPages);
  }

    // 4. FUNCTION TO DISPLAY VISITED PAGES
    function displayVisitedPages(pages) {
        const visitedPagesContainer = document.getElementById('visitedPagesContainer');
        if (visitedPagesContainer) {
            visitedPagesContainer.innerHTML = '';

            if (!pages || pages.length === 0) {
                const listItem = document.createElement("li");
                listItem.textContent = "No pages viewed yet!";
                listItem.classList.add("text-gray-500");
                visitedPagesContainer.appendChild(listItem);
            } else {
                pages.forEach(page => {
                    const listItem = document.createElement("li");
                    listItem.textContent = page; // Adjust to the format of your stored pages
                    listItem.classList.add("hover:text-blue-600", "cursor-pointer");
                    visitedPagesContainer.appendChild(listItem);
                });
            }
        }
    }

    // 5. FUNCTION TO UPDATE VISITED PAGES IN LOCALSTORAGE
    function updateVisitedPages(pageName) {
        if (pageName === "Spitfire Documentation") return;

        let globalVisitedPages = JSON.parse(localStorage.getItem('viewedPages')) || [];
        globalVisitedPages = globalVisitedPages.filter(page => page !== pageName);
        globalVisitedPages.unshift(pageName);
        localStorage.setItem('viewedPages', JSON.stringify(globalVisitedPages));

        // Debug: Log updated pages to the console
        console.log('Updated visited pages:', globalVisitedPages);
    }

  

  

    // 7. VISIBILITY CHANGE LOGIC
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            console.log('Tab is now in view!');
        } else {
            console.log('Tab is now hidden!');
        }
    });

    let lastScrollTop = 0;
const footer = document.querySelector('footer');
let hideTimeout = null;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Check scroll direction
  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the footer
    if (footer) {
      footer.style.transition = 'transform 0.5s ease';
      footer.style.transform = 'translateY(100%)'; // Moves footer out of view
    }

    // Set timeout to make the footer stay hidden for a while after scrolling stops
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
      if (footer) {
        footer.style.transform = 'translateY(100%)';
      }
    }, 1000); // Keep footer hidden for 1 second after stopping

  } else if (footer) {
    // Scrolling up, show the footer
    footer.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

    
});

console.log(marked('# Test Markdown')); // Output: <h1>Test Markdown</h1>
