import styles from './styles/pages/Homepage.module.scss';
import hero from './assets/banner.svg'
import mobHero from './assets/mobile-banner.svg'

export default function Homepage() {

    const cardTitles = [
        {
            front: "Fun",
            back: "Traditional browser‑style puzzles and games"
        },
        {
            front: "Easy",
            back: "Simple, straightforward instructions"
        },
        {
            front: "Educational",
            back: "Interactive learning that removes the textbook from the process"
        }
    ]


    return (
        <main>

            <section className="grid-con">
                <div className={`col-span-full pos-relative ${styles['hero-con']}`}>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={mobHero} />
                        <source media="(min-width: 768px)" srcSet={hero} />
                        <img src={hero} alt="Game Symbols and Icons" />
                    </picture>
                    <h2>Play Games. <br/> Learn Code.</h2>
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
                <div className={`col-span-full ${styles['coming-soon']}`}>
                    <div className={styles['title']}>
                        <h2>Coming Soon</h2>
                    </div>
                    <div className={styles['desc']}>
                        <h3>Logic Lines</h3>
                        <p>A quiz‑powered twist on Tic Tac Toe where you claim spots on the grid by answering questions correctly.</p>
                    </div>
                </div>
            </section>

        </main>
    )
}


function Cards({item}) {
    return (
        <div className={styles['card']} tabIndex="0">
            <div className={styles["card-inner"]}>
                <div className={styles["card-front"]}>
                    <p>{item.front}</p>
                </div>
                <div className={styles["card-back"]}>
                    <p>{item.back}</p>
                </div>
            </div>
        </div>
    )
}