# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

For Desktop
![](assets/images/desktop-page.png)
For Mobile

![](assets/images/mobile-page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Js

### What I learned

```css proud of using variables to make it easier to edit the css
:root {
  --soft-orange: hsl(35, 77%, 62%);
  --soft-red: hsl(5, 85%, 63%);
  --off-white: hsl(36, 100%, 99%);
  --grayish-blue: hsl(233, 8%, 79%);
  --dark-grayish-blue: hsl(236, 13%, 42%);
  --very-dark-blue: hsl(240, 100%, 5%);
}
```

```js
function openMenu() {
  navMobile.classList.add("active");
  body.style.overflow = "hidden";
  menuToggle.setAttribute("aria-expanded", "true");
}
```

### Continued development

- Learn using flex and grid more efficently
- Learn using react and express

## Author

- Linkedln - [Jay Mali](https://www.linkedin.com/in/jay-mali-9bb8b4267/)
