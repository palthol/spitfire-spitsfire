   // Create a function that creates a text element and appends it the the DOM
   function buildElement(tag, text, className) {
    // create the element
    const element = document.createElement(tag);
    
    // set the text content
    element.textContent = text;

    // set the class name
    if (className) {
    element.className = className;
  }
   
  // return the element
    return element;
  }