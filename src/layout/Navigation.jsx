import { Link } from 'react-router-dom';
import ColorTheme from '../components/ColorTheme';

const Navigation = ({ children }) => {
    return (
        <>
            <header id="main-header">
                <nav>
                    <h3>Menu</h3>
                    <div className="button-link">
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
                            <li>
                                <ColorTheme />
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container">{children}</div>
            <footer id="main-footer">
                <h4>Hugo PETIT</h4>
                <h4>IPSSI</h4>
            </footer>
        </>
    );
};

export default Navigation;
