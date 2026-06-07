# Games For Code: Development Docs - Day 6

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

Day 7: 
- Add in rules modal 
- Work on simple homepage that will lead to the game 

Day 8: 
- ensure both pages are responsive 
- ensure that all spacing, colours, and typography used are consistent 

Day 9: 
- Work on putting README together 


## Notes: 

**Day 6 Starting Point:** 
- You can start the game with a given topic selected from a dropdown (eg. JavaScript)
- Once the game is started, both the start button and select dropdown are disabled so the games settings can't be changed partway through 
- When pairs are matched, they are displayed with an X over them and are no longer clickable. At the same time their data is stored in a `matchedPairs` state variable
- Once the `matchedPairs` state has as many pairs as the original `gameData` supplied, then the player wins
    - the win message is currently displayed in the console (this will be changed as the design progresses)
- A 'timer' starts when the player clicks the start button and ends when the player wins. 
    - the time isn't currently being used, but will be put toward calculating the players total score

**Bugs**
1. You can still select more than two cards at a time


## Task List For The Day: 
1. Fix the above bug 
2. Add scoring logic
3. Work on 'rules' for the game
4. Work on design for homepage

## **Steps Taken:**

The first thing to do is fix the bug. Currently the `onClick` is set up like this: 

```jsx
onClick={item.matched || flipped ? null : cardFlipped}
```
However, I need it to only be triggered when there are less than two cards flipped over. I have a variable called `flippedCards` which holds the currently flipped over cards. So my first thought is to use that variable in the conditional statement. 

```jsx
onClick={item.matched || flipped || flippedCards.length > 1 ? null : cardFlipped}
```
- This didn't work. It was still allowing me to select more than two cards a time. 

My next thought was to move the conditional logic within the triggered function and `return` before the logic is acted upon 

```jsx
function cardFlipped(event) {
    if (item.matched) return;
    if (flipped) return;
    if (flippedCards.length > 1) return;


    setFlipped(prev => !prev);
    const matchId = Number(event.currentTarget.dataset.matchId);

    setFlippedCards(prev => [...prev, matchId]);
}
```
- this also didn't work. 

I added a console message to the function to see if it was picking up the length of the array 

```jsx
console.log(`You've flipped ${flippedCards.length} card(s)`);
```
- However, the after the first card was flipped it said the number of cards was 0, and after the second card it said the number of cards was 1. This explains why the condition wasn't being met. 
- The question now, is do I change the condition to match what's happening, or do I figure out why it's happening?
    - changing the condition to be `flippedCards.length > 0` didn't work, because it wouldn't allow me to flip over the second card 

I think what's happening, is that the `useEffect` hook I'm using to flip the cards back is messing with how it works. 

```jsx
useEffect(() => {
    if (flippedCards.length === 0) {

        const delayDebounceTimer = setTimeout(() => {                        
            Promise.resolve().then(() => setFlipped(false));
        }, 1500);

        return () => clearTimeout(delayDebounceTimer);
    }
}, [flippedCards]);

function cardFlipped(event) {
    if (item.matched) return;
    if (flipped) return;
    if (flippedCards.length > 1) return;


    setFlipped(prev => !prev);
    const matchId = Number(event.currentTarget.dataset.matchId);

    setFlippedCards(prev => [...prev, matchId]);

    console.log(`You've flipped ${flippedCards.length} card(s)`);
}
```
- essentially, it's allowing me so pick a third card because technically, the length of the flippedCards array is 0, they just haven't been turned back over to ensure that the player has enough time to read what's on the second card
- because it takes 1.5 seconds before the effect happens, if someone selects a card within that time frame then 3 cards will technically be flipped over and the previous two won't flip back because the length is no longer 0. 
- Ultimately, I had to add another state variable, `lockBoard` which prevented the player from flipping cards and the board only became unlocked after the cards have been flipped back over

With the bug fixed, the next thing to work on was the scoring logic. I started by looking over the notes I made on day 5 for how I wanted the scoring to work and then came up with point totals for the different completion times / how many wrong answers it took

I created another two state variables: 

```jsx
const [wrongGuesses, setWrongGuesses] = useState(0);
const [playerScore, setPlayerScore] = useState(0);
```
- I was already logging a message in the console everytime an incorrect made was made, so I replaced that code with: `setWrongGuesses`, incremeting it by 1 for each wrong guess
- I set the initial player score to 100 within the start game function so that regardless of how many guesses they got wrong or how long it took, the player would still end up with a minimum score of 100

I'm using a switch statement to decide how the score is calculated based on the number of pairs that were used for the game

```jsx
switch (gameData.length) {
    case 6:
        if (wrongGuesses < 7) {
            setPlayerScore(prev => prev + 100);
        } else if (wrongGuesses < 16) {
            setPlayerScore(prev => prev + 50);
        } else if (wrongGuesses < 24) {
            setPlayerScore(prev => prev + 25);
        }


        break;

    case 10:
        if (wrongGuesses < 15) {
            setPlayerScore(prev => prev + 100);
        } else if (wrongGuesses < 31) {
            setPlayerScore(prev => prev + 50);
        } else if (wrongGuesses < 41) {
            setPlayerScore(prev => prev + 25);
        }

        break;
    
    case 12:
        if (wrongGuesses < 16) {
            setPlayerScore(prev => prev + 100);
        } else if (wrongGuesses < 33) {
            setPlayerScore(prev => prev + 50);
        } else if (wrongGuesses < 45) {
            setPlayerScore(prev => prev + 25);
        }

        break;

    default:
        break;
}
```
- I still have to add in the completion time to the score at this point 
- I updated the switch statement so it wasn't updating state so often. Instead, I created a local variable `addToPlayerScore`, updated it, and then once the score was finalized, I added it to the `playerScore` state. 

For now, everything is still logging in the console.

```jsx
useEffect(() => {
    if(gameData.length === matchedPairs.length && gameData.length !== 0) { 
        console.log("Congrats! You've Won!")
        console.log(`You took ${elapsedTime.current} seconds`);
        console.log(`You made ${wrongGuesses} wrong guesses.`);
        console.log(`Your score is: ${playerScore}`);
    }
}, [playerScore])
```

I had wanted to work on some of the UI design today such as the homepage, but after spending several hours on the logic, I've decided to push that until tomorrow. I'm trying to make sure that I balance my time and energy so that I'm not burning out and end up not finishing the project.
