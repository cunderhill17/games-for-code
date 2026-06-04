# Games For Code: Development Docs - Day 3

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

Day 3: (Completed - June 3, 2026 (Today))
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

Today's game plan is to set up the CardContainer component as well as the Card component. This will include: 
- the look of the components 
- as well as the functionality to render all of the cards

The first problem I thought about / encountered was ensuring that the board was randomized. If I simply map out the array to the Card component, all of the items will be in order, therefore all of the matches will be next to each other. This means: 
- I need to separate the matches into separate objects within the array
- The array also needs to be randomized 

The first step was easy enough: 
- I passed the game data (number of pairs required by the browser width) to the card container
- then I set up a useEffect() where I had another variable called newCards set to an empty array 
- for each item in the game data array, I created two entries and pushed them to the newCards array
- finally, once the newCards array was populated, I stored it in the state variable 'cards'

So ultimately, if you had 6 pairs, then you'd have 12 cards.

```jsx
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
```

The next step was to randomize the array. 

A popular function for randomizing arrays is the `Fisher-Yates Shuffle`. For times sake, I decided to use predefined code, however, when I have more time I'd like to try writing this myself to make sure that I fully understand how it works. 

```js
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
```

At this point, I had the array of randomized cards, but they weren't visible on screen, so setting up the display was the next step. 
- I used the layout I had already planned on Figma to set up the individual card
- I also added another state variable called 'flipped' that would hold a boolean value. certain classes would be added or removed based on the value of this variable 
- then I used map() to map out the cards array to the Card component 
- I also added in a couple of media queries so that the sizing of the cards changed based on specific breakpoints (mobile, tablet, desktop)

The next thing I wanted to do was get the images for the front of the cards set. I needed a way to pass card images to the card component 
- I decided to set up a state variable called 'allCategories' that would hold the category index, category image, and category name from the original raw data 
- then I created a select dropdown mapping out 'allCategories' to an `<option>` tag which also had an onClick to trigger a function that would update the current category
- afterward I passed the current category to the card component

```jsx
useEffect(() => {
    if (!rawData.length) return;

    let newCategories = [];

    rawData.forEach((item, i) => {
        newCategories.push({
            category: i,
            name: item.name,
            image: item.image
        });
    })

    Promise.resolve().then(() => setAllCategories(newCategories));

}, [rawData]);

useEffect(() => {
    Promise.resolve().then(() => setCategory(allCategories[0]));
}, [allCategories]);


function changeCategory(event) {
    setCategory(allCategories[event.target.value]);
}
```


## Current Problems: 

1. If you start a game and then change the category, it changes the image on the cards (even if the actual category hasn't changed)
2. You can currently select more than two cards (in fact, you could flip all of them over)
3. There is currently no way to reset the game

(There are still additional features that need to be added on top of the ones listed above, but those are the ones I'll be working on next)