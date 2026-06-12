import styles from './styles/pages/NotFound.module.scss';
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <main>
            <section className="grid-con">
                <div className={`col-span-full ${styles['not-found-con']}`}>
                    <h2>404</h2>
                    <h3>Page Not Found</h3>
                    <p>Ooop! The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <NavLink to="/">Back To Home</NavLink>
                </div>
            </section>
        </main>
    )
}