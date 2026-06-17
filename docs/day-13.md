# Games For Code: Development Docs - Day 13 / 14

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

Day 15: 
- finish cleaning up the coding files

Day 16: 
- Work on putting README together 


## Notes: 

**Day 13 / 14 Starting Point:** 
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
1. While it's completed, the 'coming soon' section is kind of boring / plain

2. The hero image looks really small on mobile ----> (done)

3. The page for the memory game looks fairly empty until the game is started (should there be a placeholder of some kind?)

4. Need favicon for the website (currently using default that comes with React)

5. The one half of the about page seems kind of empty on desktop size 

### Code Changes
1. Take out any unused code / unnecessary comments 

2. Add comments to outline unique functionality so I don't the meaning for different functions / components 

3. standardize styling. I have a lot of the styling separated into different SCSS modules, but they're not organized that well and from a quick glance I can see styling that is being repeated unnecessarily



## **Steps to Take**

The first thing I did was work on implementing a mobile friendly version of the hero section so that it fit the space better 
- I used the `<picture>` tag to change between mobile and desktop versions of the image 
- The desktop version has an almost neon rectangle in the center where the heading text is placed. Surrounding it are a bunch of different game symbols 
- For the sake of time, I removed the symbols in the mobile version, keeping the neon container but making it fill the entire space so it looks like it actually belongs there 

Next I added a simple `focus-within` attribute so that if keyboard users tab over the game card links, it'll show the same effect as hovering. 
- side note: completely forgot about mobile ?? <--- no idea how to produce the same effect for phones 

I noticed something while looking through the site that I'd forgotten to change. On the actual memory game page, the order of the buttons was still start and then select a category, which didn't make sense when taking keyboard users into account, so I switched them around. 

The next thing I wanted to work on, was making the actual game accessible by keyboard. 
- Player needs to be able to tab into the game, and then move around the cards using arrow keys

Because the cards and the card container are made from divs, they aren't normally accessible through tabbing. When I looked it up on google I found a link to an entry on Mozilla's website that showed how adding `tabIndex="0"` can make the element tabbable. I added that to the container and confirmed that it worked, but the cards themselves weren't so easy as I didn't want them to just be tabbable because that wouldn't allow the player to go back and forth between cards. 

A few different parts came together to make this possible. 

1. I set up two new state variables inside of the GameContainer component 

```jsx
const [focusedIndex, setFocusedIndex] = useState(0);
const [numCards, setNumCards] = useState(null);
```
- focusedIndex keeps track of which card the player is currently “on”
- numCards stores how many total cards are on the board

2. Set the value of `numCards`

Inside the effect where I build the newCards array, I added:

```jsx
Promise.resolve().then(() => setNumCards(newCards.length));
```
- This just saves the total number of cards so I can use it later when moving left and right.

3. Pass the new states to the Card component 

```jsx
<Card 
    key={i}
    index={i} //NEW
    focusedIndex={focusedIndex} //NEW
    setFocusedIndex={setFocusedIndex} //NEW 
    item={item} 
    category={category} 
    setFlippedCards={setFlippedCards} 
    flippedCards={flippedCards}
    lockBoard={lockBoard}
    setLockBoard={setLockBoard}
    numCards={numCards} //NEW
/>
```
- `index` tells each card what position it is in the list
- `focusedIndex` tells the card whether it’s the one that should be focused
- `setFocusedIndex` lets the card update which card is selected
- `numCards` is used for wrapping around (going from last → first, or first → last)

4. I updated the Card component to accept these new props

```jsx
function Card({item, category, setFlippedCards, flippedCards, lockBoard, setLockBoard, index, focusedIndex, setFocusedIndex, numCards}) {
    //CODE GOES HERE
}
```

5. Set up a `useRef()` that will be used to focus on the current card 

```jsx
const ref = useRef(null);

useEffect(() => {
    if (index === focusedIndex && ref.current) {
        ref.current.focus();
    }
}, [focusedIndex, index]);
```
This means:
- Whenever focusedIndex changes, whichever card matches that index will automatically call .focus() on itself.

6. Updated the cards button element

```jsx
<button 
    className={`${styles.memoryCard} ${flipped ? styles.flipped : ''}`}
    ref={ref} // NEW
    onClick={cardFlipped} 
    data-match-id={item.matchId} 
    tabIndex={index === focusedIndex ? 0 : -1} //NEW
    onKeyDown={handleKeyDown} //NEW
>
    {/* OTHER HTML ELEMENTS GO HERE */}
</button>
```
- Only the currently selected card has `tabIndex={0}`, which makes it focusable
- All other cards get `tabIndex={-1}`, so they don’t clutter the tab order
- `ref={ref}` lets the card focus itself
- `onKeyDown` listens for arrow keys

7. Create the function `handleKeyDown(e)`

```jsx
function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
        if (focusedIndex === numCards-1) {
            setFocusedIndex(0);
        } else {
            setFocusedIndex(prev => prev + 1);
        }
    } else if (e.key === "ArrowLeft") {
        if (focusedIndex === 0) {
            setFocusedIndex(numCards -1);
        } else {
            setFocusedIndex(prev => prev - 1);
        }   
    }
}
```
This does two things:
1. Checks whether the player pressed the left or right arrow key
2. Moves the focusedIndex forward or backward
    - If the player goes past the last card, it wraps back to the first
    - If they go left from the first card, it wraps to the last

Because of the ref + useEffect, changing focusedIndex automatically moves the keyboard focus to the new card.


Next, I think it would be good to add in keyboard controls for the `start`, `reset`, `rules` and possibly the `category` selection (not sure if this would work the same way as normal buttons)

```jsx
useEffect(() => {
    function gameControls(e) {

        switch(e.key) {
            case "h":
                openRulesPopup();
                break;
            case "r":
                resetGame();
                break;
            case "c":
                if (!inProgress && allCategories.length > 0) {
                    categoryRef.current.focus();
                }
                break;
            case "s":
                if (!inProgress && filteredData.length > 0) {
                    startGame();
                }
                break;
            default:
                break;
        }
    }

    window.addEventListener("keydown", gameControls);
    return () => window.removeEventListener("keydown", gameControls);
}, [filteredData, inProgress, allCategories]);
```
- I created a switch statement as part of a function within a `useEffect()`
- The function is triggered by a `keydown` event attached to the window 
- it was pretty easy to set up as I just followed the same structure for what I did with the arrow keys previously 

I finished by adding the keyboard shortcuts to the rules popup so players would know how to use them

## Still to Complete: 
### User Experience changes

1. While it's completed, the 'coming soon' section is kind of boring / plain

3. The page for the memory game looks fairly empty until the game is started (should there be a placeholder of some kind?)

4. Need favicon for the website (currently using default that comes with React)

5. The one half of the about page seems kind of empty on desktop size 


### Code Changes

1. Take out any unused code / unnecessary comments 

2. Add comments to outline unique functionality so I don't the meaning for different functions / components 

3. standardize styling. I have a lot of the styling separated into different SCSS modules, but they're not organized that well and from a quick glance I can see styling that is being repeated unnecessarily