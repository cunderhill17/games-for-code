# Games For Code: Development Docs - Day 11

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

Day 13: 
- Work on putting README together 


## Notes: 

**Day 12 Starting Point:** 
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

2. The hero image looks really small on mobile 

3. The footer text isn't centered properly ----> (done)

4. Need to change the name of the application within the footer ----> (done)

5. The JSON data seems to be taking a bit to fetch from the API ----> (done)
    - When the games page loads, it takes a few moments for the category dropdown to be populated, so it looks like an empty dropdown at first 

6. The 'win' modal needs more definition between it and the background (maybe an accent border) ----> (done)

7. Not all of the buttons / links have hover states ----> (done)

8. The page for the memory game looks fairly empty until the game is started (should there be a placeholder of some kind?)

9. Need favicon for the website (currently using default that comes with React)

10. Change the 'title' that appears in the browser tab ----> (done)

11. The one half of the about page seems kind of empty on desktop size 


### Code Changes

1. Take out any unused code / unnecessary comments 

2. Add comments to outline unique functionality so I don't the meaning for different functions / components 

3. I just noticed that while the game selects how many matches to use based on browser width, it always chooses in the same order. With desktop using the most matches at 12, that means that any of the matches from 13 on will never be used ----> (done)
    - need to add a shuffle to this part as well 

4. standardize styling. I have a lot of the styling separated into different SCSS modules, but they're not organized that well and from a quick glance I can see styling that is being repeated unnecessarily


## **Steps to Take**

The first thing I worked on was fixing the footer text, which just required taking out the hardcoded height for the footer / section tags. I also removed the flexbox as it wasn't necessary. 
- during this I realised I wasn't fond of the fixed footer always being there even when the content took up the entire page so I started looking for solutions to this. 

I looked up the problem on google and looked through different solutions that people had used, and ultimately took suggestions from Mozilla's website, choosing to use flexbox. 

```css
.all-content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}
```
- I used `.all-content` as a wrapper for the page, putting it around the header, main content, and footer. 
- I used `display: flex` and `flex-direction: column` to stack the contents top to bottom and then set the min-height to 100vh which meant the contents of the webpage would always fill the entire viewport
- I then created a wrapper named `.content` that was put around the main content tag, in this case `<Outlet />` which represents the content of whatever page the user is on. 
    - By using `flex: 1`, it forces the content within the wrapper to take up all extra available space after the header and footer have taken up their natural heights

I added more definition to the win modal popup by giving it a 2 pixel border in the yellow accent colour as well as fixing the box-shadow property that was supposed to be applied 

The next thing I want to work on is the hover / focus states for links and buttons. These are the current links and buttons I have: 
- Games link (header)
    - hover: done
    - focus: done
- About link (header)
    - hover: done
    - focus: done
- start button (games page)
    - hover: done
    - focus: done
- category drop down (games page)
    - hover: done
    - focus: done
- restart button (games page)
    - hover: done
    - focus: done
- rules popup button (games page)
    - hover: done
    - focus: done
- close button on rules popup (games page)
    - hover: done
    - focus: done
- close button on win modal (games page)
    - hover: done
    - focus: done

It was easy to keep hover and focus states consistent because the links used the same styling, the game buttons used the same styling, and the close buttons used the same styling, so there was only three places I had to add code to. 

With the above being mostly visual, I decided to break up the day by working on something more logic based next. I moved onto fixing the issue where the games use the same matches everytime rather than selecting them randomly. 

Currently, the state variable that decides which matches are used is `gameData`. 

```jsx
useEffect(() => {
    if (!rawData.length) return;

    const delayDebounceTimer = setTimeout(() => {
        let currentMatches = []

        if (width < 768) {
            for(let i = 0; i < 6; i++) {
                currentMatches.push(rawData[category.category].matches[i]);
            }
        } else if (width < 1200) {
            for(let i = 0; i < 10; i++) {
                currentMatches.push(rawData[category.category].matches[i]);
            }
        } else {
            for(let i = 0; i < 12; i++) {
                currentMatches.push(rawData[category.category].matches[i]);
            }
        }

        setFilteredData(currentMatches);

    }, 500);

    return () => clearTimeout(delayDebounceTimer);

}, [width, rawData, category]);
```
- the fetch call pulls in the JSON data and stores everything in `rawData`
- in the above `useEffect` the width is used to determine how many matches are used for the next game
- then it uses the array method `push()` in tandom with a `for` loop to add the number of match objects required to an array variable `currentMatches` which resets everytime the width changes 
- the state vairable `filteredData` is then updated using `currentMatches`

once the user presses start, it triggered the function `startGame()`

```jsx
function startGame() {
    if(filteredData.length !== 0) {
        setGameData(filteredData);
        setInProgress(true);

        startTime.current = performance.now();
    }
}
```
- using the filteredData, it then sets the state variable `gameData` which is what's used for the game. 
- the reason `gameData` is used instead of `filteredData` when they hold the same information at that point, is that if the using adjusts the width of their screen during the game, that would trigger a re-render and update `filteredData` which means the entire game would be reset. 
- in this way, the game always sticks with the same data until it's reset and the player clicks start again. 

Looking through how it's currently setup, I think my best bet would be to shuffle the deck just before the `if` statement occurs. I've already used a shuffle function later in the game, so I'm going to repurpose that (if possible).

**First Attempt**

```jsx
useEffect(() => {
    if (!rawData.length) return;

    const delayDebounceTimer = setTimeout(() => {
        let shuffleDeck = [...rawData]; 
        let currentMatches = []

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                // Pick a random index from 0 to i
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        shuffle(shuffleDeck);

        if (width < 768) {
            for(let i = 0; i < 6; i++) {
                currentMatches.push(shuffleDeck[category.category].matches[i]);
            }
        } else if (width < 1200) {
            for(let i = 0; i < 10; i++) {
                currentMatches.push(shuffleDeck[category.category].matches[i]);
            }
        } else {
            for(let i = 0; i < 12; i++) {
                currentMatches.push(shuffleDeck[category.category].matches[i]);
            }
        }

        setFilteredData(currentMatches);

    }, 500);

    return () => clearTimeout(delayDebounceTimer);

}, [width, rawData, category]);
```
- I created a variable called `shuffleDeck` and copied over the `rawData`. I didn't want to shuffle the `rawData` itself as I was worried about that causing rerenders to happen. 
- I then used the shuffle function to shuffle the array. 
- the shuffled array was then used to pick matches from instead of the state variable `rawData`

That did not work. 

1. It didn't seem to shuffle for some reason 
2. A bug popped up where when you started the game on a smaller size then desktop, you always got the JavaScript questions regardless of category. 

The problem was that I was shuffling the categories, not the actually matches. So I edited the function call to look like this: 

```jsx
shuffle(shuffleDeck[category.category].matches);
```

It does seem to work now. But after thinking about it for a minute, this will only shuffle the 'deck' if `width`, `rawData` or `category` are changed. 
- rawData should never change after the initial data retrieval 
- most users won't change the width of their browser continuously. 
- players could want to play the same category multiple times 

This begs the question, how does the 'deck' get shuffled outside of that. 

My first thought was to see if the effect could be triggered when the reset function is called, as that would be the obvious time to shuffle the deck. However, when I looked it up on google it seems you can't trigger a `useEffect` with a function. `useEffect()` seem to be state dependent. 

So the next obvious choice would be to have a state variable change at the end of the game, that variable would be set as a dependency, and then when it updates the deck would be shuffled. 

It worked, and I'm honestly glad that I have a game option with only 6 pairs. It makes it alot easier to test without having to log things to the console all the time. 

The next thing I did was add a ternary that provided a `loading...` value if the categories weren't populated yet. 

```jsx
 {allCategories.length > 0 ? allCategories.map((item, i) => <option key={i} value={item.category} >{item.name}</option>) : <option>Loading...</option>}
```
- checks the length of `allCategories` and if its not greater than 0, then it uses the loading option

The last thing I'm going to do is update the text on the about page to reflect the name of the application instead of the placeholder it was using. 

## Still to Complete: 
### User Experience changes

1. While it's completed, the 'coming soon' section is kind of boring / plain

2. The hero image looks really small on mobile 

3. The page for the memory game looks fairly empty until the game is started (should there be a placeholder of some kind?)

4. Need favicon for the website (currently using default that comes with React)

5. The one half of the about page seems kind of empty on desktop size 


### Code Changes

1. Take out any unused code / unnecessary comments 

2. Add comments to outline unique functionality so I don't the meaning for different functions / components 

3. standardize styling. I have a lot of the styling separated into different SCSS modules, but they're not organized that well and from a quick glance I can see styling that is being repeated unnecessarily