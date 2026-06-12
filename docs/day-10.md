# Games For Code: Development Docs - Day 10

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

Day 8: (Completed - June 9, 2026 / June 11, 2026)
- ensure both pages are responsive (completed)
- ensure that all spacing, colours, and typography used are consistent 

Day 9: (Completed - June 11, 2026 / June 12, 2026)
- Write content for rules popup 
- Finish logo 
- Hero Section 
- Write content for 'about page' 

Day 10: (Worked on - June 11, 2026 / June 12, 2026)
- Create About Page (completed)
- Create 'construction' icon (completed)
- Create 'coming soon' section on homepage 
- Create game graphics for Games page (completed)

Day 11: 
- Work on putting README together 


## Notes: 

**Day 10 Starting Point:** 
- You can start the game with a given topic selected from a dropdown (eg. JavaScript)
- Once the game is started, both the start button and select dropdown are disabled so the games settings can't be changed partway through 
- When pairs are matched, they are displayed with an X over them and are no longer clickable. At the same time their data is stored in a `matchedPairs` state variable
- Once the `matchedPairs` state has as many pairs as the original `gameData` supplied, then the player wins
    - the win message is currently displayed in the console (this will be changed as the design progresses)
- A 'timer' starts when the player clicks the start button and ends when the player wins. 
- the players score is calculated based on the time it took to complete as well as how many wrong guesses they had
- the player's score is displayed in a modal popup once they've finished the game

## Task List For The Day
1. Work on logo (done)
2. Work on 'under construction' graphic (done)
3. Add content to 'information cards' on homepage (done)
4. Modify game cards to fit the colour theme of the site (done)
5. Work on 'coming soon' section on website 
6. Look into adding a custom 404 page (done)


## **Steps to Take**

I started by updating the content on the homepage 'info cards' so they said something when they flipped over. I also updated the font size at tablet/desktop so it was easier to read. 

I then modified the current game card images so that they matched the colour theme of the website to make a more cohesive experience. 

I created the 'under construction' icon in illustrator and added it to the project. I also modified the current 'play' button so that the stroke lines were thicker as it was harder to see before

I was having a bit of a hard time working out a design for the 'coming soon' section on the homepage, so I decided to work on the 404 page next 
- this was fairly simple as the page only needed to contain basic text and a link back to the homepage 
- I already had the font and color styles that could be applied to match the theme 
- The only thing I had to look up was the syntax required for the 'catch-all' routing. I couldn't remember which symbol it was from when I'd taken a React course as I'd never created a 404 page before. Easy fix though. Quick google search told me that the symbol I needed was: `*`

I've decided to use a wordmark rather than a specifically designed logo. I could always add a better logo in the future, but the main point of this project is to get through it and deploy it online. 
- the name I settled on for the site is: BlankSlate, with the logo being: `_BlankSlate`
- I also went ahead and purchased the domain name I'll use for the site so that I didn't run into problems with it being unavailable: `blankslategames.ca`


The last (major) thing I have to do is create the 'coming soon' section

I think I'm going to leave it here for today though. I'm struggling with a way to make it look good and I don't want to simply slap something together just to be done with it. 



## Still to Complete:
1. Work on 'coming soon' section on the homepage
