# Games For Code: Development Docs - Day 2

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

Day 2: (Completed - June 2, 2026 (Today))
- Work on JSON file for the game contents 
- Design the cards in order to get a handle on constraints (like how long the contents can be)
- create basic wireframes for the two pages 

Day 3: 
- Code the basic structure of the game (so that the cards line up and display the correct data)
    - block out the positioning for the buttons (but they won't be functional yet)
- start working on flip functionality 

Day 4: 
- Work on functionality for `match logic`, starting the game, and resetting the game 

Day 5: 
- Work on functionality for scoring / timer logic 

Day 6: 
- Add in rules modal 
- Work on simple homepage that will lead to the game 

Day 7: 
- ensure both pages are responsive 
- ensure that all spacing, colours, and typography used are consistent 

Day 8: 
- Work on putting README together 


## Notes: 

1. I completed the JSON file for the game 'matches', saving them in a GitHub repo that I'm using for JSON files. Rather than importing the file from the same program, I decided to use the Fetch API to simulate how it would work when I included a backend. 
  
2. I then worked on basic wireframes for the game page, figuring out how to adjust the format from mobile to desktop. I decided on having 12 cards for mobile, 20 for tablet, and 36 for desktop. That way users can avoid large amounts of scrolling during the game for a more seemless experience. 

3. The next thing I worked on was the design for the front of the cards. I settled on using the icons for HTML, CSS, and JavaScript, but changed the colours to match the colour scheme for the application. (I created them in illustrator and adjusted size and final colouring in photoshop)

4. Now I need to work on getting the cards set up. I'm going to have a function for a single card, and a function for a card container that will hold all of the cards. And then use map() to transform the data retrieved from the JSON file into all of the needed cards 

**Steps:** 
- retrieve JSON data using fetch API <-- this is asynchronous so keep that in mind 
    - would it make sense to do this with a hook (useEffect())?
- confirm that data has been properly retrieved using a console.log() message 
- added window resize function to detect when the browser changes widths (reused code from a previous project I had done as it's a utility file)
- The game data needs to be passed to the container so it can be used to 'map' the cards 
    - this means that there also needs to be a Card component 

Originally, I was thinking about filtering the gameData within the container so that it decides how many cards to display based on browser width. However, after thinking it over, it makes more sense to filter the data before it's based to the container, that way there's a clear separation in responsibilities for each function 

For this part it really helped to write out the requirements of the function by hand so that I knew what I was aiming for: 

For Example: 
- the number of cards in the game changes based on browser width: 
    - mobile (412) --> 12 cards
    - tablet (768) --> 20 cards
    - desktop (1200) --> 36 cards 
- That tells me there's going to be an if statement of some kind involved. 
- However, it also got me thinking about how the function could trigger dozens of times as the browser is resized so a timeout function should be used
- Also, what would happen if a user resized their browser in the middle of a game? 
    - there should be a difference between the filtered data and the data that the player is using. 
    - so there would be three different 'states'
        - raw data
        - data filtered by browser width 
        - data that the player is using 
    - this way once the player has started the game it won't matter if they resize or not. 
    - It could slightly decrease the quality of playing experience, because then they could still end up with more or less cards then their supposed to have. However, it would ensure that once the game has been started, the components aren't rerendered unnecessarily. 


## Things I've Learned: 
- React components cannot be asynchronous  