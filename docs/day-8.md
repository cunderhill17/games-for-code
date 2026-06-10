# Games For Code: Development Docs - Day 8

**Purpose**
- to make learning code fun and interactive through different web based games 

**Immediate Goal:** 
- Create a static application that has a homepage or landing page as well as 1 game.
    - Should be responsive across mobile to desktop
    - the game should be fully functional (aside from aspects that could require a database such as saving games or remembering previous scores)
- The application should be deployed to the web
- All steps / bugs should be documented 
- There should be a clear and well written README file for the application before being deployed 
- All `future improvements` will be listed in the appropriate section as I come across or think of them, however, anything out of the current scope will not be touched upon in version 1

## Game One Idea: Memory 
- The first game to be created will be a memory game, however, instead of flipping cards over to find matching pictures, the user will flip cards over to find matching coding concepts such as: 
    - card one: `{}`
    - card two: `object signifier`
- The game will include 18 pairs (36 cards in total)

**The following functionality will be provided:** 
1. Button to display the rules 
2. Reset button / Start Button 
3. Button to switch the topic (such as HTML / Arrays / JavaScript, etc.)
    - I'm going to include two topics to start with 
4. Display final scored (based on time to complete the game)
5. Current card information will be retrieved from a JSON file
6. The cards will be animated to flip over

## Tech Stack
1. React project created using Vite (just normal JavaScript (not TypeScript))
2. SCSS modules used for styling 


## Completion Checklist
- Game loads without errors
- Cards flip and match logic works
- Timer works
- Score displays
- Rules modal works
- Reset works
- JSON loads correctly
- App is responsive
- README complete

## Daily Goals 

Day 1: (Completed - June 1, 2026)
- Plan scope of project 
- Set up project repo 
- Plan out daily goals 
- Set up global styling 

Day 2: (Completed - June 2, 2026)
- Work on JSON file for the game contents 
- Design the cards in order to get a handle on constraints (like how long the contents can be)
- create basic wireframes for the two pages 

Day 3: (Completed - June 3, 2026)
- Code the basic structure of the game (so that the cards line up and display the correct data)
    - block out the positioning for the buttons (but they won't be functional yet)
- start working on flip functionality 

Day 4: (Completed - June 5, 2026)
- Work on functionality for `match logic`, starting the game, and resetting the game 

Day 5/6: (Completed - June 6, 2026 / June 7, 2026)
- Work on functionality for scoring / timer logic

Day 7: (Completed - June 8, 2026)
- Add in rules modal 
- Work on simple homepage that will lead to the game 

Day 8: (Worked on - June 9, 2026 (Today))
- ensure both pages are responsive (completed)
- ensure that all spacing, colours, and typography used are consistent 
    - got through colours, still need to work on spacing and typography

Day 9: 
- Write content for rules popup 
- Finish logo 
- Hero Section 
- Write content for 'about page'

Day 10: 
- Create About Page 
- Create 'coming soon' icon 
- Create 'coming soon' section on homepage 
- Create game graphics for Games page

Day 11: 
- Work on putting README together 


## Notes: 

**Day 8 Starting Point:** 
- You can start the game with a given topic selected from a dropdown (eg. JavaScript)
- Once the game is started, both the start button and select dropdown are disabled so the games settings can't be changed partway through 
- When pairs are matched, they are displayed with an X over them and are no longer clickable. At the same time their data is stored in a `matchedPairs` state variable
- Once the `matchedPairs` state has as many pairs as the original `gameData` supplied, then the player wins
    - the win message is currently displayed in the console (this will be changed as the design progresses)
- A 'timer' starts when the player clicks the start button and ends when the player wins. 
- the players score is calculated based on the time it took to complete as well as how many wrong guesses they had
- the player's score is displayed in a modal popup once they've finished the game

## Task List For The Day
1. creates games page 
2. do research for the logo / sketch it out 
3. create variables for colour theme to keep it consistent across pages
4. work on the hero section of the homepage

## **Steps to Take**

I started by working on the games page. 
- set up the initial page and connected it to routing on App.jsx page 
- created the layout for the initial card which included getting placeholder images for the Match Code game and a play button 
- added styling to the GameCard component 
- Replaced hard‑coded cards with a mapped list generated from a games array.


I worked on the logo for a bit, making different sketches and researching different symbols for both 'code' and 'games'
- Design work's more difficult for me as I find it harder to quantify at the end of day if I actually got anything done or not. I could make a couple dozen sketches but if the logos not done than it doesn't feel like I accomplished anything 

I also worked on setting up a colour theme for the project so that the pages feel more cohesive 

```css
:root {
  --clr-bg: #000901;
  --clr-surface: #001702;
  --clr-accent: #FFCE1B;
  --clr-text: #ffffff;
  --clr-muted: #999999;
}
```
- I'm still not completely sold on the colours, but I did get them applied to my elements, so I can now change the colour in a single place and it'll effect all similar elements


## Still to Complete:
1. Create Logo 
2. Work on About page 
3. Work on hero section of homepage 
4. Work on 'coming soon' section on the homepage
5. Need to create an 'under construction' or 'coming soon' graphic 
