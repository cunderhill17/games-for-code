import styles from './styles/pages/About.module.scss';
import headingStyles from './styles/components/Headings.module.scss';

export default function About() {
    return (
        <main>
            <section className="grid-con">
                <div className="col-span-full">
                    <div className={styles['about-text-box']}>
                        <h2 className={`col-span-full ${headingStyles['aboutHeading']}`}>Behind The Project</h2>
                        <p>We believe learning to code should feel more like playing a game than studying a textbook.</p>
                        <p>That's why we created Neon Crates, a platform that teaches programming concepts through interactive games such as memory challenges, puzzles, and other hands-on experiences.</p>
                        <p>Created by a student developer, Neon Crates was the first product to be released by Seven Paper Lanterns, a studio whose primary focus is media, entertainment, and education.</p>
                        <p>Founded in 2026, Seven Paper Lanterns is dedicated to making creative projects that feel handcrafted - from web development to games and beyond. We value clarity, steady improvement and the belief that even small creations can make an impact.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}