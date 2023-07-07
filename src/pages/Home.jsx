import {
    Link
  } from "react-router-dom";
const Home = () => {
    return (
          <div class="container">
          <div class="container-column">
            <div class="home-title">
              <h1>Portfolio<br/>Hugo PETIT</h1>
              <h2>Développeur full-stack</h2>
            </div>
            <p>Je suis un développeur web fullstack passionné, passé par l'IUT de Vélizy et l'école IPSSI, et spécialisé dans la création de sites web. Je vous souhaite la bienvenue sur mon portfolio !</p>
            <div class="button-link">
              <Link to="/Cv">Accéder à mon CV</Link>
              <br/>
              <Link to="/Cv">Découvrir mes compétences</Link>
            </div>
            </div>
          </div>
    );
  }
export default Home;