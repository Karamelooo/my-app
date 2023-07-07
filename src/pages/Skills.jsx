import Column from "../components/Column";
import Backend from "../img/png/backend.png";
import Frontend from "../img/png/frontend.png";
import Gamedev from "../img/png/gamedev.png";

const SkillsPage = () => {
    return (
        <div class="container">
        <Column title="Développement web">
            À l'aide du langage de programmation PHP et du langage de requêtes SQL, je sais rendre mes sites web dynamiques, ergonomiques et fonctionnels.
            <br/><br/>
            Je sais développer un espace membres avec une gestion des droits, gérer une base de données et créer une interface administrateur permettant d'ajouter, modifier ou supprimer le contenu d'un site web via une interface adaptée.
            <img src={Backend} alt="Développement web"/>
        </Column>
        <Column title="Intégration web">
        J'ai pu concevoir des sites web en partant de zéro tout en prenant soin d'adapter la sémantique HTML5 et en faisant attention de respecter au maximum les normes W3C.
        <br/><br/>
        J'ai une bonne connaissance du langage CSS3 et sais manipuler les sélecteurs, les flexbox et CSS Grid. Je sais utiliser les media queries pour rendre mes sites web responsive pour tout appareil.
        <br/><br/>
        Je sais aussi créer et adapter des wireframes, puis les retranscrire en code. Je pratique la méthode "mobile-first".
        <br/><br/>
        Enfin, mes connaissances en JavaScript me permettent d'y ajouter des animations pour venir compléter mon CSS.
            <img src={Frontend} alt="Intégration web"/>
        </Column>
        <Column title="Développement et conception de jeu vidéo">
        J'ai appris, au sein de ma première année MMI, à développer mon propre jeu vidéo en JavaScript en développant la gestion des collisions, des déplacements, de l'interface, des cartes du jeu, de la création des graphismes et de leur implémentation.
        <br/><br/>
        Des cours de game design sont également venus s'associer à mes larges connaissances en jeux vidéo. Ainsi, j'ai appris à créer un wireframe papier fonctionnel d'un jeu, permettant de mettre en avant et de faire comprendre la jouabilité du jeu avant de passer à son développement.
            <img src={Gamedev} alt="Développement de jeu"/>
        </Column>
        </div>
    );
  }
export default SkillsPage;
