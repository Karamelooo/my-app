import { Link } from 'react-router-dom';
import Column from '../components/Column';
const NoMatch = () => {
    return (
        <Column title="Erreur 404">
            <div className="button-link">
                <Link to="/">Retourner à l&apos;accueil</Link>
            </div>
        </Column>
    );
};
export default NoMatch;
