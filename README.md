# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot/ScreenshotDesktop.png.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [@Frontendmentor.io](https://your-solution-url.com)
- Live Site URL: [@Vercel](https://fs-frontend-css-3column-preview-card-component.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styles

### What I learned

- Using Google fonts and personalizing themes:
```css
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap");
@import "tailwindcss";

@theme {
  --font-lexendDeca: "Lexend Deca", serif;
  --font-bigShoulders: "Big Shoulders Display", serif;
  --text-base: 15px;

  --color-bright-orange: hsl(31, 77%, 52%);
  --color-dark-cyan: hsl(184, 100%, 22%);
  --color-very-dark-cyan: hsl(179, 100%, 13%);
  --color-transparent-white: hsla(0, 0%, 100%, 0.75); /*(paragraphs)*/
  --color-very-light-gray: hsl(0, 0%, 95%); /*(background, headings, buttons)*/
  --leading-card: 25px;
}
```

- Using props to pass tailwind classes to component:

```js
/* eslint-disable react/prop-types */
const Card = ({ icon, description, txtColor, buttonBackColor, buttonHoverBackColor}) => {
  const title = icon.split("/")[2].split("-")[1].split(".")[0].toUpperCase();

  return (
    <div className={`w-[327px] p-12 ${buttonBackColor} `}>
      <img src={icon} alt={title} className="mb-9" />
      <h2 className="font-bigShoulders font-bold text-[40px] text-very-light-gray my-[25px]">
        {title}
      </h2>
      <p className="font-lexendDeca leading-card text-white/75">{description}</p>
      <button className={`${txtColor} rounded-3xl bg-very-light-gray h-12 w-[146px] font-lexendDeca font-normal  mt-[25px] hover:cursor-pointer hover:text-very-light-gray hover:border-2 hover:border-very-light-gray ${buttonHoverBackColor}`}>
      Learn More
      </button>
    </div>
  );
};

export default Card;
```

### Continued development

I will continue using tailwind and react as practice in my learning process even I could just use plain CSS and HTML to get familiar with these technologies.

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styles

## Author

- Website - [Gustavo Sanchez](https://gusanchefullstack.dev/)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)
- LinkedIn - [@gusanchefullstackdev](https://www.linkedin.com/in/gusanchefullstackdev/)