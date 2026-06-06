# Games For Code: Development Docs - Day 5

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

Day 5: (Working on - June 6, 2026 (Today))
- Work on functionality for scoring / timer logic
    - finished the timer and made a plan for how scoring will work, but I still have to implement the scoring logic

Day 6: 
- Add in rules modal 
- Work on simple homepage that will lead to the game 

Day 7: 
- ensure both pages are responsive 
- ensure that all spacing, colours, and typography used are consistent 

Day 8: 
- Work on putting README together 


## Notes: 

**Day 5 Starting Point:** 
- You can start the game with a given topic selected from a dropdown (eg. JavaScript)
- Once the game is started, both the start button and select dropdown are disabled so the games settings can't be changed partway through 
- When pairs are matched, they are displayed with an X over them and are no longer clickable. At the same time their data is stored in a `matchedPairs` state variable
- Once the `matchedPairs` state has as many pairs as the original `gameData` supplied, then the player wins
    - the win message is currently displayed in the console (this will be changed as the design progresses)

**Bugs:**
- if the player selects the same card (such as attempting to flip it back over before choosing another card), it will use the same card data twice for the comparison and end up matching them together (because obviously the same card ID's will match). Then it will mark `both` cards in the pair completed, despite having only found one of them.  

**Decisions:** 
- I think I'm going to change the number of cards on desktop from 36 to 24. It'll fit better on the screen and less scrolling will be involved. 


## Task List For The Day: 

1. Fix the bug mentioned above
2. Change the number of cards displayed at desktop to 24
3. Add some more styling to the game (to at least get the positioning of elements correct)
    - I'll use this time to add in the currently missing buttons (eg. Rules)
    - I'd also like to modify the style of the cards a bit (first by adding a border radius, they seem a bit rigid at the moment)
4. Figure out scoring / timing logic 
    - start by adding a timer to know how long the player takes to complete the game 
    - then decide how the players score will be calculated 

## **Steps Taken:**

The first two tasks didn't take long. I only had to adjust two lines of code, changing the number of pairs from 18 to 12, and adding an additional condiiton for the onClick to work for cards. 

```jsx
onClick={item.matched || flipped ? null : cardFlipped}
```
- I was already using the state variable `flipped` in order to change UI for the cards. 
- By adding `flipped` which holds a boolean value as a conditional, it allows the function `cardFlipped` to not be triggers for cards that are already flipped over. 

The next step was to add a bit of styling. 

I started by wrapping the current buttons with a div that I gave a class of `grid-con` and a second div within that one that acted as a `button container`
- the grid styles are part of the global styles imported directly into the `main.jsx` file. While all button styles come from a SCSS module that's imported in specifically to the memory game page

```jsx
import btnStyles from './styles/components/Button.module.scss'
```

I added styling to the buttons including for the disabled state of the buttons to make it explicit that they aren't usable are certain points of the game 

```css
.game-btn:disabled {
  background-color: #e0e0e0;
  color: #9e9e9e;
  cursor: not-allowed;
  border-color: #e0e0e0;
  box-shadow: none;
}
```
I also added additional styling to the cards to make them 'softer' and more inviting (such as a border-radius to curve the hard edges)

After finishing the styling (for now), the next thing to work on was the timing functionality. 

I added two `useRef` variables for `startTime` and `elapsedTime`, using `performance.now()` to set the current property of each useRef and calculate how long it took for the user to complete the game. 

```jsx
const startTime = useRef(null);
const elapsedTime = useRef(null);

//...

function startGame() {
    if(filteredData.length !== 0) {
        setGameData(filteredData);
        setInProgress(true);

        startTime.current = performance.now();
    }
}

useEffect(() => {
    if(gameData.length === matchedPairs.length && gameData.length !== 0) {
        const winGameTimeout = setTimeout(() => {
            elapsedTime.current = (performance.now() - startTime.current) / 1000
            console.log("Congrats! You've Won!")
            console.log(`You took ${elapsedTime.current} seconds`);
        }, 2000);


        return () => clearTimeout(winGameTimeout);
    }
}, [matchedPairs, gameData]);
```
- this isn't ultimately what the timing functionality will be used for, but it did allow me to check that it worked. 

I'm thinking that I'll have score calculated in two ways: 
- First, how many incorrect matches the user selected 
- Second, how long it took the player to finish the game

The bench mark for wrong guesses will change depending on how many cards the game has (so mobile will allow less wrong guesses than desktop will). This will also be the same for how long it takes to complete. 

There is 1.5 seconds after two cards have been flipped before the cards are flipped back over (to ensure the player has enough time to read the second card)
- needs to be taken into account 

Thinking about this rationally: How long does it take to simply flip the cards over?
- Mobile --> 12 cards --> 15 Seconds
- Tablet --> 20 cards --> Almost 26 seconds
- Desktop --> 24 cards --> 31 seconds 

I'm going to double the base times for each size and that will be the time that gets the highest timing bonus. 

I'm also thinking about how long it would take the average person to complete the game: My Times for Each Version
- Mobile --> 12 cards --> 35.8 seconds (6 wrong guesses)
- Tablet --> 20 cards --> 82 seconds (15 wrong guesses)
- Desktop --> 24 cards --> 100 seconds (16 wrong guesses)

I obviously know all the correct answers for which cards match together. However, the order is randomized, so I'm looking for pairs the same way a normal player would. 
- taking this into account, I may make the maximum time 2-3x my time in order for the player to get a timing bonus 
- eg. If they're on mobile, they can't take longer than 107 seconds in order to get a bonus 
    - also important to note that, the win condition is simply to find all matches, so discreased reaction time or physical limitations will not keep anyone from completing the game as long as they can select the cards. 


## Bugs to Fix
1. You can play one game the whole way through, however, if you reset the game and play again, it automatically triggers the finished logic. 
- I managed to fix this by updating `resetGame()` to clear `matchedPairs` and reset startTime/elapsedTime refs. This prevented leftover state from causing the win logic to trigger instantly after starting a new game.



## Problems to consider
1. You can tab over the buttons, but the focus state is barely noticable so it's hard to tell what you're currently selecting 
2. The button order doesn't make sense for keyboard users
    - the start button comes first before the option to select a category, so you can't tab back to start the game once the category has been selected 
3. You can't use your keyboard to select any of the cards