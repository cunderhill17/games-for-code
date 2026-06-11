// import styles from './styles/pages/About.module.scss';
import headingStyles from './styles/components/Headings.module.scss';

export default function About() {
    return (
        <main>
            <section className='grid-con'>
                <h2 className={`col-span-full center-item ${headingStyles['aboutHeading']}`}>Behind The Project</h2>
            </section>
        </main>
    )
}