import { useEffect, useState } from "react"



export default function MemoryGame() {
    const [gameData, setGameData] = useState([]);


    useEffect(() => {
        async function retrieveData() {
            const response = await fetch('https://raw.githubusercontent.com/cunderhill17/json-files/refs/heads/main/quiz-questions/code-quiz-matches.json');
            const data = await response.json();

            setGameData(data);
        }

        retrieveData();
    }, []);




    return (
        <h1>Code Match</h1>


    )

}
