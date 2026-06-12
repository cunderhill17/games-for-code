import headerStyles from './styles/components/Header.module.scss';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header id={headerStyles['page-header']} className="grid-con">
            <div className="col-span-1 md:col-span-3 lg:col-span-3">
                <NavLink to="/">
                    <h1>_BlankSlate</h1>
                </NavLink>
            </div>
            <nav id={headerStyles['main-nav']} className="col-span-3 md:col-start-6 md:col-end-9 lg:col-start-10 lg:col-end-13">
                <ul>
                    <li><NavLink to="/games">Games</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}