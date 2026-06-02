import { useEffect, useState } from "react"
import { useWindowSize } from "./util/useWindowResize";



export default function MemoryGame() {
    const [gameData, setGameData] = useState([]);
    const [rawData, setRawData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState(0);
    const { width } = useWindowSize();

    useEffect(() => {
        async function retrieveData() {
            const response = await fetch('https://raw.githubusercontent.com/cunderhill17/json-files/refs/heads/main/quiz-questions/code-quiz-matches.json');
            const data = await response.json();

            setRawData(data);
        }

        retrieveData();
    }, []);


    useEffect(() => {
        if (!rawData.length) return;

        const delayDebounceTimer = setTimeout(() => {
            let currentMatches = []

            if (width < 768) {
                for(let i = 0; i < 6; i++) {
                    currentMatches.push(rawData[category].matches[i]);
                }
            } else if (width < 1200) {
                for(let i = 0; i < 10; i++) {
                    currentMatches.push(rawData[category].matches[i]);
                }
            } else {
                for(let i = 0; i < 18; i++) {
                    currentMatches.push(rawData[category].matches[i]);
                }
            }

            setFilteredData(currentMatches);

        }, 500);

        return () => clearTimeout(delayDebounceTimer);

    }, [width, rawData, category])


    function startGame() {

        if(filteredData.length !== 0) {
            setGameData(filteredData);
        }

    }


    return (
        <main>
            <h1>Code Match</h1>

            <GameContainer gameData={gameData}/>

            <button onClick={startGame}>Start Game</button>
        </main>
    )

}


function GameContainer({gameData}) {

    if (gameData.length !== 0) {
        console.log(gameData);
    }

}
