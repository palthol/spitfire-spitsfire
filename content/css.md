# What is CSS?

CSS (Cascading Style Sheets) is a style sheet language used to style and format the appearance of content on the web. It is primarily used in conjunction with HTML to control the look and feel of a web page. If HTML is the foundation and structure, CSS is the furnishings. While HTML provides the structure and content (like text, images, and links), CSS defines how this content is displayed, such as colors, layouts, and fonts.

## Why was CSS created?

Cascading Style Sheets were created to make web development more efficient and manageable during a period of rapid growth for web development. Before CSS, all of the styling for web pages was inline, meaning it had to be written directly into the HTML code itself. This made websites hard to maintain because the structure (the content) and the presentation (the design) were mixed together in one place.

Think of it this way: HTML is like the framework of a house—the walls and the basic shape—while CSS is like the paint, wallpaper, and furniture that make it look the way you want. By keeping these two parts separate, it becomes much easier to make changes. If you want to repaint a room, you don’t have to tear down the walls; you just update the paint. Similarly, with CSS, you can change the look of a website without touching the content itself.

One of the big advantages of CSS is that it allows you to style multiple pages or sections of your website all at once. Instead of individually designing each page, you can write one CSS file and have it apply across your entire site. This creates consistency, meaning that all your pages look the same without you needing to repeat the same code over and over.

CSS also makes your website more accessible. By separating the content from the presentation, tools like screen readers for the visually impaired can better interpret the information on the page. This means your website can be used by more people, regardless of their needs or the device they are using.

Overall, CSS was created to make web design simpler and more powerful. It allows you to easily update styles, keep everything organized, and create consistent, user-friendly designs across your site.

## Components of CSS

### 1. Selectors

Selectors tell CSS which elements in your HTML to style. For example, you might want to change the look of all your headings (`h1`) or just a specific button (`#submitButton` for an ID or `.buttonClass` for a class).

### 2. Properties

Properties define what aspect of the selected element you want to change. This could be the color, font size, spacing, or alignment, for example.

- Example properties: `color`, `font-size`, `margin`, `padding`, `background-color`.

### 3. Values

Values are what you assign to properties. If your property is `color`, you might set the value to `red` or a specific shade like `#ff0000`.

### 4. Declarations

A declaration is a pair of a property and its value. This pair is what actually makes changes to your element’s style.

### 5. Declaration Blocks

A declaration block contains one or more declarations and is wrapped in curly braces `{}`. Each element can have multiple styles applied to it.

### 6. Rule Sets

A rule set combines a selector with a declaration block. The selector identifies what gets styled, and the declaration block specifies how to style it.

### 7. Comments

Comments let you leave notes in your CSS code that won’t affect how your site looks. They’re helpful for keeping your code organized.

### 8. External Stylesheets

Instead of writing all your CSS in the same file as your HTML, you can put your CSS in a separate file with the `.css` extension and link to it in your HTML file. This makes it easier to keep things organized and reuse styles across multiple pages.

### 9. Cascading and Inheritance

CSS stands for "Cascading" Style Sheets for a reason. If multiple rules apply to the same element, CSS decides which one takes precedence based on a set of rules. Elements can also inherit styles from their parent elements, which can save you time if you want consistent styles for related elements.
