import footerStyles from './styles/components/Footer.module.scss';

export default function Footer() {
    return (
        <footer className={footerStyles['footer']}>
            <section className='grid-con'>
                <p className='col-span-full'>
                    &copy; 2026 BlankSlate Games. Designed and developed by Paper Lantern Studio. All rights reserved.
                </p>
            </section>
        </footer>
    )
}