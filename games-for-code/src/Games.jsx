import { NavLink } from "react-router-dom"

export default function Games() {
    // const gameInfo = [
    //     {
    //         name: "Code Match",
    //         available: true,
    //         image: 'images/code-match.jpg',
    //         link: '/memory'
    //     }
    // ]


    return (
        <main>
            <section className="grid-con">
                <h2 className="col-span-full center-item">Games</h2>
                <h3 className="col-span-full center-item">Browse and Level Up Your Skills!</h3>
            </section>

            <section className="grid-con">
                <div className="games-con">
                    <GameCard />
                </div>
            </section>

        </main>
    )
}


function GameCard() {
    return (
        <NavLink to="/memory">
            <section className="pos-relative">
                <div>
                    <h2>Code Match</h2>
                    <img src="images/code-match.jpg" alt="Code Match Game Image" />
                </div>
                <div>
                    <img src="images/play-button.svg" alt="Play Button Icon" />
                </div>
            </section>
        </NavLink>
    )
}