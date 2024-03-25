# Flash_card_app

A Flash Cards Web App for Language Study Utilizing the Chat GPT API

# Requirements of app

- [ ] 1. Inputs getting two sides (front, back) of cards
- [ ] 2. Show lists of cards
- [ ] 3. Start button to do flash card game
  - [ ] 3-1. The order of showing card is random
- [ ] 4. Dictionary button to show the description of words / sentences in the back side of card utilizing the Chat GPT API

# Tech stacks

- React
  - [ ] install Next.js
- tailwind-css
- react-testing-library

# Test Scenario

- Adding New Cards
  - [ ] [Event Handling Test] Card input validation - required
  - [ ] [Asynchronous Test] Testing asynchronous logic for card addition API
- Viewing Card List
  - [ ] [Asynchronous Test] Checking if values are loaded when cards are queried - whether the query API is successful
  - [ ] Starting and Progressing Through the Flash Card Game
  - [ ] [Basic Rendering Test] Checking if the back side value is rendered properly when the Show button is clicked
- Feature to Show Instructions
  - [ ] [Asynchronous Test] Checking if the Chat GPT API call is successful
  - [ ] [Basic Rendering Test] App.tsx
