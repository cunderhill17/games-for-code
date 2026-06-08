# Games For Code: Development Docs - Day 7

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

Day 7: (Completed - June 8, 2026 (Today))
- Add in rules modal 
- Work on simple homepage that will lead to the game 

Day 8: 
- ensure both pages are responsive 
- ensure that all spacing, colours, and typography used are consistent 

Day 9: 
- Work on putting README together 


## Notes: 

**Day 7 Starting Point:** 
- You can start the game with a given topic selected from a dropdown (eg. JavaScript)
- Once the game is started, both the start button and select dropdown are disabled so the games settings can't be changed partway through 
- When pairs are matched, they are displayed with an X over them and are no longer clickable. At the same time their data is stored in a `matchedPairs` state variable
- Once the `matchedPairs` state has as many pairs as the original `gameData` supplied, then the player wins
    - the win message is currently displayed in the console (this will be changed as the design progresses)
- A 'timer' starts when the player clicks the start button and ends when the player wins. 
- the players score is calculated based on the time it took to complete as well as how many wrong guesses they had
    - the score is currently outputted to the console. 

## Task List For The Day
1. Header & Footer (completed)
2. Homepage (completed)
3. Rules Modal (completed)
4. "You've Won!" Popup (completed)


## **Steps to Take**

I'm going to start by working on the header and footer as they're separate components from the homepage and will be used on all current and future pages
- With it only really having a single content page, there won't be alot of information, but I'll probably try to include at least a 'games' page where the current game and all future games could be found, as well as an 'about' page that gives context for the website
- I'm choosing to forgo a contact page at the moment as I'm not adding any form of backend in v1

Header 
- links to other pages (Games, About)
- website logo 

Note:: because there's only two links, I'm going to avoid including a hamburger menu for mobile in v1 as it's just an added step that users will have to do in order to navigate the website. 

Footer
- copyright information 

**Initial Structure**

```jsx
import headerStyles from './styles/components/Header.module.scss';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header id={headerStyles['page-header']} className="grid-con">
            <div className="col-span-1 md:col-span-3 lg:col-span-3">
                <NavLink to="/">
                    <p>Logo</p>
                </NavLink>
            </div>
            <nav id={headerStyles['main-nav']} className="col-span-3 md:col-start-6 md:col-end-9 lg:col-start-10 lg:col-end-13">
                <ul>
                    <li><NavLink to="/memory">Games</NavLink></li>
                    <li><NavLink to="/">About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
```
- using a `<p>` tag as a placeholder until I can create a logo for the application 
- The navigation will be updated as the proper pages are created, however, for now, it allows me to navigate to the pages that are currently available 

The next thing I did was work on the footer structure. I created a fixed footer at the bottom of the page and added a simple copyright line as there's not much else to include currently. 

```jsx
import footerStyles from './styles/components/Footer.module.scss';

export default function Footer() {
    return (
        <footer id={footerStyles['footer']}>
            <section className='grid-con'>
                <p className='col-span-full'>
                    &copy; 2026 Games for Code. Designed and developed by Paper Lantern Studio. All rights reserved.
                </p>
            </section>
        </footer>
    )
}
```
- I will say, it was fun coming up with names for a studio. I think it's these kind of details that make it feel like a real project and keep you from getting overwhelmed by applications that don't seem to be going anywhere. 

The design for the header and footer were fairly simple so they didn't take a lot of time; however, the homepage itself is a bit trickier. I want it to feel like a complete application, but the MVP will only have one game. 
- if it was a portfolio or studio website, I could include the creation process kind of like a casestudy, but for the actual game website it should feel more polished
- the about page will include the context / history of the site, so it wouldn't make sense to duplicate all of that content 
- Maybe updates or a 'coming soon' feature? 


I decided on the following content for the homepage: 
- hero section (which will have a call to action)
- a card section that will give the benefits of the application --> 'fun', 'easy', 'educational'
    - you'll be able to hover over them for a more detailed explanation
- coming soon section 

I was able to reuse the layout and a lot of the general styling that was used for the memory cards. However, instead of the flip happening during an `onClick` event, I added it to a hover effect for the card. 

I kept most of the content for the homepage as 'placeholder' content as I haven't had the chance to look at graphics or come up with specific content I may want to use for things such as the CTA 

```jsx
<main>

    <section className="grid-con">
        <div id={styles['hero-con']} className="col-span-full">
            <p>Hero Section</p>
        </div>
    </section>

    <section className="grid-con">
        <div id={styles['card-container']} className="col-span-full">
            {cardTitles.map((item, i) => (
                <Cards key={i} item={item} />
            ))}
        </div>
    </section>

    <section className='grid-con'>
        <div id={styles['coming-soon']} className="col-span-full">
            <p>'Coming Soon'</p>
        </div>
    </section>

</main>
```

The next thing I did was work on the rules popup for the game itself. Again, for today, I'm going to work on the structure and functionality and worry about adding the actual content another day. 

```jsx
<section className={styles['rules-popup']}>
    <h2>Code Match Rules</h2>
    <p>This is where the rules will go.</p>
    <button className={btnStyles['close-popup']}>Close Popup</button>
</section>
```
- the structure was simple, only requiring a heading, a placeholder for where the content would go, and a button that would be used to close the popup 

I then added the functionality to the popup through the use of a state variable set to a boolean value. 

```jsx
<section className={`${styles['rules-popup']} ${styles[openModal ? 'open' : '']}`}>
```
- when the boolean was set to `true` it would add an open class which would change the elements display to `flex`, and when it was set to `false` the class would be removed and the elements display would be set to `none`. 


The last thing I had on my list for the day was to create the popup that happened when a player completed the game. 
- the general structure can be reused from the rules modal with modified content 
- The functionality however will have to be changed     
    - rather than being triggered through a click event, it will need to be triggered by the win condition

```jsx
const winGameTimeout = setTimeout(() => {
    elapsedTime.current = (performance.now() - startTime.current) / 1000

    let scoreToAdd = calculatePlayerScore();
    setPlayerScore(prev => prev + scoreToAdd);
    setOpenWinModal(true);

}, 2000);
```
- after calculating the player score, it sets the 'win modal' to open. This updates the user that they've won as well as the score they received. 

```jsx
<section className={`${styles['win-popup']} ${styles[openWinModal ? 'open' : '']}`}>
    <h2>You've Won! Congrats!</h2>
    <p>Player Score: {playerScore}</p>
    <button className={btnStyles['close-popup']} onClick={closeWinModal}>Close</button>
</section>
```
- the HTML elements are exactly the same as the ones used for the rules popup with the one major difference being that you can only trigger the win modal by actually completing the game. 


## Still to Complete:
1. Create Logo 
2. Work on About page 
3. Work on hero section of homepage 
4. Create 'games' page that will hold current game as well as future games
5. Work on 'coming soon' section on the homepage