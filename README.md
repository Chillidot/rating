# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](04_img/screenshot.png)

### Links

- Solution URL: https://github.com/Chillidot/rating
- Live Site URL: https://chillidot.github.io/rating/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Positioning images in front of svg.

```html
<svg width="3rem" height="3rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle class="circle" cx="50%" cy="50%" r="50%" />
  <image x="33%" y="33%" width="1rem" height="1rem" href="04_img/icon-star.svg" />
</svg>
```
```css
.circle{
    fill: var(--clr-medium-gray);
}
```

### Continued development

Efficient combination of CSS Grid/Flexbox.

### Useful resources

- [Resource 1](https://www.w3schools.com) - This helped me with almost everything

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/Chillidot
