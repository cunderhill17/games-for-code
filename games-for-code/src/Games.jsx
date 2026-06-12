import { NavLink } from "react-router-dom"
import cardStyles from './styles/components/Cards.module.scss';
import headingStyles from './styles/components/Headings.module.scss';

export default function Games() {
    const gameInfo = [
        {
            name: "Code Match",
            available: true,
            image: 'images/code-match.jpg',
            link: '/memory'
        },
        {
            name: "Logic Lines",
            available: false,
            image: 'images/code-match.jpg',
            link: '#' 
        },
        {
            name: "Syntax Saver",
            available: false,
            image: 'images/code-match.jpg',
            link: '#' 
        }
    ]


    return (
        <main>
            <section className="grid-con">
                <h2 className={`col-span-full center-item ${headingStyles['gamesHeading']}`}>Games</h2>
                <h3 className={`col-span-full center-item ${headingStyles['gamesSubHeading']}`}>Browse and Level Up Your Skills!</h3>
            </section>

            <section className="grid-con">
                <div className={`col-span-full ${cardStyles['cardContainer']}`}>
                    {gameInfo.map((item, i) => <GameCard key={i} item={item} />)}
                </div>
            </section>

        </main>
    )
}


function GameCard({item}) {
    return (

        <section className={`pos-relative ${cardStyles['game-card']}`}>
            <NavLink to={item.link}>
                <div className={cardStyles['game-top']}>
                    <h2>{item.name}</h2>
                    {/* <img src={item.image} alt={`${item.name} Game Image`} /> */}
                </div>
                <div className={cardStyles['game-hover']}>
                    <img src={item.available ? 'images/play-button.svg' : 'images/construction-icon.svg'} alt={item.available ? 'Play Button Icon' : 'Under Construction Icon'} />
                </div>
            </NavLink> 
        </section>    

    )
}