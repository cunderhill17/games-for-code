import styles from './styles/pages/Homepage.module.scss';
import banner from './assets/banner.svg'

export default function Homepage() {

    const cardTitles = [
        {
            front: "Fun",
            back: "explanation"
        },
        {
            front: "Easy",
            back: "explanation"
        },
        {
            front: "Educational",
            back: "explanation"
        }
    ]


    return (
        <main>

            <section className="grid-con">
                <div className={`col-span-full pos-relative ${styles['hero-con']}`}>
                    <img src={banner} alt="Game Symbols and Icons"/>
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
                <div id={styles['coming-soon']} className="col-span-full">
                    <p>'Coming Soon'</p>
                </div>
            </section>

        </main>
    )
}


function Cards({item}) {
    return (
        <div className={styles['card']}>
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