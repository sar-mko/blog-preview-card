# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

- [Desktop Preview](assets/images/desktop-screenshot.png)
- [Mobile Preview](assets/images/mobile-screenshot.png)

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
- Live Site URL: [Blog Card Preview](https://sar-mko.github.io/blog-preview-card)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Javscript

### What I learned

Used Javascript and CSS to handle the active states

```css
h1:hover{
color: hsl(47, 88%, 63%);
cursor: pointer;
}
```
```js
header.onmouseover = function(event) {
    main.style.boxShadow = "14px 14px black"
  }
header.onmouseout = function(event) {
        main.style.boxShadow = "5px 5px black"
  };
```

### Continued development

Would work on smoother transitions betweeen desktop and mobile screens, for more usability.

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [sar-mko](https://www.frontendmentor.io/profile/sar-mko)
- Linkedin - [Sarah Meko](https://www.linkedin.com/in/sarah-mko/)


