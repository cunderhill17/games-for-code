import { NavLink } from "react-router-dom"
import cardStyles from './styles/components/Cards.module.scss';

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
                <div className={cardStyles['card-container']}>
                    <GameCard />
                </div>
            </section>

        </main>
    )
}


function GameCard() {
    return (
        <>
        
            <NavLink to="/memory">
                <section className={`pos-relative ${cardStyles['game-card']}`}>
                    <div className={cardStyles['game-top']}>
                        <h2>Code Match</h2>
                        <img src="images/code-match.jpg" alt="Code Match Game Image" />
                    </div>
                    <div className={cardStyles['game-hover']}>
                        <img src="images/play-button.svg" alt="Play Button Icon" />
                    </div>
                </section>
            </NavLink>

        </>


    )
}