import { useEffect, useState } from "react"
import { useWindowSize } from "./util/useWindowResize";
import styles from './styles/components/Cards.module.scss'



export default function MemoryGame() {
    const { width } = useWindowSize();
    const [gameData, setGameData] = useState([]);
    const [rawData, setRawData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [category, setCategory] = useState({category: 0});
    const [inProgress, setInProgress] = useState(false);
    
    //Retrieves game information from JSON file
    useEffect(() => {
        async function retrieveData() {
            const response = await fetch('https://raw.githubusercontent.com/cunderhill17/json-files/refs/heads/main/quiz-questions/code-quiz-matches.json');
            const data = await response.json();

            setRawData(data);
        }

        retrieveData();
    }, []);


    //Creates categories for select button from raw data (JSON File)
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

    }, [rawData])

    //Sets the default category before the player chooses
    useEffect(() => {
        Promise.resolve().then(() => setCategory(allCategories[0]));
    }, [allCategories])


    //Determines how many matches will be used based on browser width
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
                for(let i = 0; i < 18; i++) {
                    currentMatches.push(rawData[category.category].matches[i]);
                }
            }

            setFilteredData(currentMatches);

        }, 500);

        return () => clearTimeout(delayDebounceTimer);

    }, [width, rawData, category])


    //Saves filtered data to game data so cards the player is using won't be changed by resizing the browser
    //Also sets the game to being in progress
    function startGame() {
        if(filteredData.length !== 0) {
            setGameData(filteredData);
            setInProgress(true);
        }
    }
    
    //Updates current category based on user selection event
    function changeCategory(event) {
        setCategory(allCategories[event.target.value]);
    }

    //Resets the game 
    function resetGame() {
        setInProgress(false);
    }

    return (
        <main>
            <h1>Code Match</h1>

            <button onClick={startGame}>Start Game</button>
            <select name="gameCategories" id="gameCategories" onChange={changeCategory} disabled={inProgress}>
                {allCategories.map((item, i) => <option key={i} value={item.category} >{item.name}</option>)}
            </select>
            <button onClick={resetGame}>Restart Game</button>

            <section className="grid-con">
                <GameContainer gameData={gameData} category={category}/>
            </section>
        </main>
    )
}











function GameContainer({gameData, category}) {
    const [cards, setCards] = useState([])

    //Separates the card matches into individual cards and then shuffles them so array order is random
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

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                // Pick a random index from 0 to i
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        shuffle(newCards);

        Promise.resolve().then(() => setCards(newCards));
    }, [gameData]);
    
    return (
        <div className={`col-span-full ${styles.cardContainer}`}>
           {cards.map((item, i) => <Card key={i} item={item} category={category}/>)}
        </div>
    );

}








function Card({item, category}) {
    const [flipped, setFlipped] = useState(false);

    if (!category || !category.image) return null;


    function cardFlipped() {
        setFlipped(prev => !prev);
    }

    return (
        <div className={`${styles.memoryCard} ${flipped ? styles.flipped : ''}`} onClick={cardFlipped}>
            <div className={styles["card-inner"]}>
                <div className={styles["card-front"]}>
                    <img src={category.image} alt={`${category.name} card image`} />
                </div>
                <div className={styles["card-back"]}>
                    <p>{item.text}</p>
                </div>
            </div>
        </div>
    )
}
