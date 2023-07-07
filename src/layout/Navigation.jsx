import { Link } from "react-router-dom";

const Navigation = ({children}) => {
    return (
        <>
        <header id="main-header">
            <nav>
                <h3>Menu</h3>
                <div class="button-link">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Cv">CV</Link>
                    </li>
                    <li>
                        <Link to="/skills">Compétences</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
        <div class="container">
            {children}
        </div>
        <footer id="main-footer">
            IPSSI
        </footer>
        </>
    )
}

export default Navigation;