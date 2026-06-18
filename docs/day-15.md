# Games For Code: Development Docs - Day 15

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

Day 10/11: (Completed - June 11, 2026 / June 12, 2026 / June 14, 2026)
- Create About Page 
- Create 'construction' icon 
- Create 'coming soon' section on homepage 
- Create game graphics for Games page 

Day 12: (Completed - June 15, 2026)
- Work on list of things that need to be tweaked / fixed / improved upon 
    - Fixed footer
    - updated 'win' modal styling 
    - added hover & focus states to buttons and links 
    - change title in index.html file 
    - added randomization to deck 

Day 13/14: (Completed - June 16, 2026 / June 17, 2026)
- Worked on list of things that needed to be tweaked / fixed / improved upon 
    - made hero image responsive for mobile 
    - added keyboard accessibility to the cards on the games page
    - added keyboard accessibility to `code match` game
        - players can now move through the cards using arrow keys 
        - they can also select the different buttons using keyboard keys such as 'r' for restart
    - updated the rules modal to reflect the keyboard shortcuts that were added

Day 15: (Completed - June 18, 2026)
- finish cleaning up the coding files

Day 16: (Completed - June 18, 2026)
- Work on putting README together 


## Notes: 

**Day 15 Starting Point:** 
- You can start the game with a given topic selected from a dropdown (eg. JavaScript)
- Once the game is started, both the start button and select dropdown are disabled so the games settings can't be changed partway through 
- When pairs are matched, they are displayed with an X over them and are no longer clickable. At the same time their data is stored in a `matchedPairs` state variable
- Once the `matchedPairs` state has as many pairs as the original `gameData` supplied, then the player wins
    - the win message is currently displayed in the console (this will be changed as the design progresses)
- A 'timer' starts when the player clicks the start button and ends when the player wins. 
- the players score is calculated based on the time it took to complete as well as how many wrong guesses they had
- the player's score is displayed in a modal popup once they've finished the game

## Task List For The Day
### User Experience changes
1. While it's completed, the 'coming soon' section is kind of boring / plain ---> leave for version1

2. The page for the memory game looks fairly empty until the game is started (should there be a placeholder of some kind?) ---> leave for version1

3. Need favicon for the website (currently using default that comes with React) ----> (done)

4. The one half of the about page seems kind of empty on desktop size ---> leave for version1

### Code Changes
1. Take out any unused code / unnecessary comments ----> (done)

2. Add comments to outline unique functionality so I don't the meaning for different functions / components ----> (done)

3. standardize styling. I have a lot of the styling separated into different SCSS modules, but they're not organized that well and from a quick glance I can see styling that is being repeated unnecessarily ---> leave for version1

## **Steps to Take**

The first thing I did was create a favicon to be displayed in the browser tab. I just used a simple puzzle piece and made it a neon green. 

I then went through all of the files and removed any unnecessary comments or code that wasn't being used. I also added a few more comments to the game logic to ensure I'd remember what everything did if I came back to it in the future to make updates or changes. 

I added a focus effect to the info cards on the homepage as well as a tabIndex of 0, so that users can tab to the cards and they'll flip over the same way as if they were being hovered over. 

I updated the name of the studio in the footer and about page to reflect the final name that's been selected. I also updated the name of the application in the footer, header, and about page as it turns out `BlankSlate` was already used by a board game, so I didn't want to use it for a website that did web browser games

I also managed to find the time to create the README today including project description, features, install instructions, and pictures showing off a couple of the pages for the project. 