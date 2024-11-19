  // 6. BUILD ELEMENT FUNCTION (for future reuse)
    function buildElement(tag, text, className) {
        const element = document.createElement(tag);
        element.textContent = text;
        if (className) {
            element.classList.add(className);
        }
        return element;
    }