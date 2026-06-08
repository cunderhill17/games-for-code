export default function Header() {
    return (
        <header className="grid-con">
            <div className="col-span-1 md:col-span-3 lg:col-span-3">
                <p>Logo</p>
            </div>
            <nav className="col-span-3 md:col-start-6 md:col-end-9 lg:col-start-10 lg:col-end-13">
                <ul className="center-item">
                    <li><a href="#">Games</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}