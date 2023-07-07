import {
    Link
  } from "react-router-dom";
import Column from "../components/Column";
const NoMatch = () => {
    return (
      <Column
      title="Erreur 404"
      >
        <div class="button-link">
          <Link to="/">Retourner à l'accueil</Link>
        </div>
      </Column>
    );
  }
export default NoMatch;