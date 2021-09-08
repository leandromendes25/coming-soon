# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
## Overview

This project was build based on a challenge from frontend mentor with the purpose of learning more about frontend

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Receive an error message when the `form` is submitted if:
    -   The `input` field is empty
    -   The email address is not formatted correctly

### Screenshot

![](./screenshot.PNG)

### Links

-   Solution URL: [Solution URL](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0/hub/comming-soon-htmlcss-and-js-k2afOFixj)
-   Live Site URL: [Solution working](https://sad-mcnulty-6670de.netlify.app/)

### Built with

-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow

### What I learned

Learned a little more about Js and regex.

```js
const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
document.querySelector(".btn").addEventListener("click", () => {
    if (!regex.test(input.value)) {
        error.classList.add("visible");
        submit.style.borderColor = "red";
        btn.style.boxShadow = "0 7px 2px -2px rgba(0,0,0,0.4)";
        btn.style.filter = "brightness(2.2)";
        warning.style.display = "block";
    } else {
        error.classList.remove("visible");
        submit.style.border = " 1px solid hsl(0, 36%, 70%)";
        btn.style.filter = "brightness(2)";
        warning.style.display = "none";
    }
});
```
