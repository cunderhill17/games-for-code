import footerStyles from './styles/components/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={footerStyles['footer']}>
            <section className='grid-con'>
                <p className='col-span-full'>
                    &copy; 2026 Neon Crates. Designed and developed by Seven Paper Lanterns. All rights reserved.
                </p>
            </section>
        </footer>
    )
}