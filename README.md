# Frontend Mentor - FX Checker solution

This is a solution to the [FX Checker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/foreign-exchange-currency-converter). This project is a real-time currency converter built with React, featuring live exchange rates, historical charts, and personalized favorites.

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- **Converter:** Convert amounts between currencies in real-time using live rates from the Frankfurter API.
- **Currency Picker:** Search and select from 55+ currencies with a grouped and searchable picker.
- **Live Markets Ticker:** View a scrolling ticker of major currency pairs and their 24-hour changes.
- **Rate History:** Analyze trends with an interactive chart spanning ranges from 1 day to 5 years.
- **Compare:** See a single amount converted across multiple currencies simultaneously.
- **Favorites & Log:** Pin frequently used pairs and maintain a persistent log of past conversions using `localStorage`.
- **Accessibility:** Navigate the entire application via keyboard with clear focus states and semantic HTML.

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- **React** - JavaScript library for building the user interface.
- **Vite** - Frontend tooling for a fast development experience.
- **Tailwind CSS** - For rapid, responsive, and "dark-first" styling.
- **Recharts** - For visualizing the currency rate history.
- **Frankfurter API** - Reliable, keyless data source for exchange rates.
- **Browser LocalStorage** - To persist user data like favorites and logs without a backend.

### What I learned

During the initial setup, I focused on establishing a clean project architecture. I learned the importance of separating the provided `starter-code` from my active `src` directory to maintain a clear reference to the original design assets and instructions.

```js
// Example of how I'll handle localStorage for favorites
const saveFavorite = (pair) => {
  const currentFavorites =
    JSON.parse(localStorage.getItem("fx-favorites")) || [];
  localStorage.setItem(
    "fx-favorites",
    JSON.stringify([...currentFavorites, pair]),
  );
};
```

### Continued development

- **Performance Optimization:** Implementing efficient data fetching and caching to reduce API calls.
- **Advanced Animations:** Polishing the transitions for the currency picker and the live market ticker.
- **Keyboard Shortcuts:** Adding shortcuts for swapping currencies or switching chart ranges to improve the power-user experience.

### Useful resources

- [Frankfurter API Documentation](https://frankfurter.dev/) - Essential for understanding the available endpoints for live and historical data.
- [Frontend Mentor Hackathon Rules](https://www.frontendmentor.io/articles/fm30-hackathon-currency-converter) - Provided the framework for requirements like the mandatory README and accessibility standards.

## Author

- Website - \[link removed\]
- Frontend Mentor - \[link removed\]

## Acknowledgments

Special thanks to the Frontend Mentor team for providing the high-quality Figma designs and the JetBrains Mono font assets that make this project a great portfolio piece.
