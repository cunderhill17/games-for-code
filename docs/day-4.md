# Games For Code: Development Docs - Day 4

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

Day 4: (Completed - June 5, 2026 (Today))
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

Day 3 was ended with the following problems: 

1. If you start a game and then change the category, it changes the image on the cards (even if the actual category hasn't changed)
2. You can currently select more than two cards (in fact, you could flip all of them over)
3. There is currently no way to reset the game

**Ideas to solve problems:** 
- while the game's in progress the select dropdown to change category should be disabled. 
    - could save the state of the game in a state variable --> `[inProgress, setInProgess] = useState(false)`
- The `inProgress` variable could also be used to reset the state of the game using a useEffect() + an if statement. Something like: 

```jsx
useEffect(() => {
    if(inProgress) {
        //code
    } else {
        // code to reset all stats to their defaults 
    }
}, [inProgress])
```

- Selecting more than two cards doesn't specifically need a direct fix, as it should be solved once other logic has been added. 
    - a player will select two cards 
    - those two cards will be compared 
    - if they match, they'll be given a matched state and no longer clickable. 
    - if they don't match, they'll be returned to their unflipped state
    - so at no point should there ever be more than 2 cards flipped over 

**Steps:** 
- First I need to decide where the state variable for `inProgress` should live. Honestly, I'm thinking in the main component for the game as that's where the reset button will live. It can then be passed down to any of the other components that may need it. 

- Then I'll make the easiest fix and add an if statement to the select that will add a disabled feature based on the boolean value of `inProgress`

- The next step would be to add a reset button that changes `inProgress` back to false and updates the state of the game
    - changing state back to false makes the select button active again, which is a good first step
    - However, the reset button also needs to remove all cards from the board to restart from a fresh state
        - My first thought would be to reset gameData to an empty array --> and that did nothing. 

It turns out that setting `gameData` to an empty array did work, I just didn't have it executed properly. 

```jsx
function GameContainer({gameData, category}) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (!gameData.length) return;

        let newCards = [];

        gameData.forEach(item => {
            newCards.push({
                type: "term",
                text: item.term,
                matchId: item.id
            });

            newCards.push({
                type: "definition",
                text: item.definition,
                matchId: item.id
            });
        });

        Promise.resolve().then(() => setCards(newCards));
    }, [gameData]);
    
}
```
- Originally, I had the code set so that if gameData was empty, then it would return, however, this would mean that the state variable that held all the cards from the previous game wouldn't get updated and therefore the board wouldn't reset so even though the array was now empty, it was actually holding onto data from a previous game. 

I changed the return statement to look like this: 

```jsx
if (!gameData.length) {
    Promise.resolve().then(() => setCards([]));
    return;
}
```
- this allows for cards to be empty when gameData is empty

- The next step was to evaluate the cards against each other to determine if they were matches. Every card currently has a property called `matchId` with the values being the same for matching pairs. Therefore if you select two cards with the same value, they would be determined to be a match. The question is, where to hold the value of `matchId` within the component. 
    - I double checked online and it seems React components can have datasets, so I'm going to try that first. 
    - I also added a quick console.log() to check that I was added the dataset to the right element 

```jsx
const matchId = event.currentTarget.dataset.matchId;
console.log(matchId);
```
- I then created a state variable called `flippedCards` to hold the current flipped cards (from 0-2 cards) within the game container, passing it to the Card component and updating it like this: 

```jsx
function cardFlipped(event) {
    setFlipped(prev => !prev);
    const matchId = event.currentTarget.dataset.matchId;

    setFlippedCards(prev => [...prev, matchId]);
}
```

I added two `useEffect()` hooks, with the first being in the gameContainer component and determines whether the flipped cards are a match. Regardless of whether they match or not, the flippedCards is always reset to any empty array so that it never holds more than two cards

```jsx
useEffect(() => {
    if(flippedCards.length === 2) {
        flippedCards[0] === flippedCards[1] ? console.log('Cards Match') : console.log('Cards Do Not Match');
        Promise.resolve().then(() => setFlippedCards([]));
    }
}, [flippedCards])
```

The second hook was added to the Card component which flipped the cards back over once the flippedCards array was empty. 

```jsx
useEffect(() => {
    if (flippedCards.length === 0) {
        Promise.resolve().then(() => setFlipped(false));
    }
}, [flippedCards]);
```

**At this point the game progesses like this:** 
1. You start the game 
2. You can select cards which will flip over to reveal the contents 
3. A console log message will show whether they match or not
4. Regardless of whether they match or not, the cards will be flipped back over to their original state
5. You can also reset the game which clears the board of games and empties all necessary arrays
6. Before game starts, you currently have an option of two different game topics to select from

**Things that need immediate fixing:** 
1. Because of how the timing works, the second card does actually flip over because the flipped state is reset almost automatically. 
2. Messages about matches are logged to the console but nothing actually happens with them at this point 

**Solutions:** 

I'm going to try using a `setTimeout()` to see if adding a short delay will allow the user to see the card flip over before it resets
- this seems to work and I set it at a delay of 1500, but may change the value later if I find the value changes to quickly or too slowly 

The next part of the problem is actually doing something with the cards if they do match.
- I created a function to update the matched property of each card to `true` if they matched
- I also created a basic image in photoshop to represent the 'matched cards'
- I updated the Card component so that the image rendered depended on the boolean value of the `matched` property. 
    - if true it changes to a card with an X to show it's matched (design will probably change)
    - if it's false, it shows the image related to that game topic 
- I also updated the component so that once cards are matched they no longer trigger the onclick event that causes them to flip over 


This still doesn't actually do anything with the matches though (aside from changing the image). There still needs to be a `win condition`.

The win condition for a game like this is to find all pairs. So there should be a variable that holds record of the current pairs found. 

```jsx
function cardsMatch(cardId) {
    setCards(prev =>
        prev.map(card =>
            card.matchId === cardId
                ? { ...card, matched: true }
                : card
        )
    );

    const newMatchedPair = gameData.findIndex(item => item.id === cardId);
    setMatchedPairs(prev => [...prev, gameData[newMatchedPair]])
}
```
- I updated the function triggered when cards match to add the data for the matching pair to `setMatchedPairs` which is stored within the main component 

For now I've added a simple win condition where if the number of matched pairs match the number of pairs used in the game, then user wins.
- I also placed it within a timeout so that the user has time to see the final pair before any messages or popups happen 

```jsx
useEffect(() => {
    if(gameData.length === matchedPairs.length && gameData.length !== 0) {
        const winGameTimeout = setTimeout(() => {
            console.log("Congrats! You've Won!")
        }, 2000);


        return () => clearTimeout(winGameTimeout);
    }
}, [matchedPairs, gameData]);
```

The last thing I did for the day was to also disable the start button when the games in progress to stop potentional bugs should multiple games be 'started' before settings can be reset. 




Notes::
- all `useEffect()` must run before conditional return statements within the main flow (this doesn't seem to count returns within functions)