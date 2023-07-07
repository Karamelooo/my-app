import {
    Link
  } from "react-router-dom";
import Profil from '../components/Profil';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Formations from '../components/Formations';
const Cv = () => {
    return (
      <>
          <div class="container">
            <div class="container-column">
              <Profil
                firstname="Hugo"
                lastname="PETIT"
                age="23"
                address="25 rue Claude Tillier, 75012"
                phone="01 02 03 04 05"/>
                <Skills
                  HTML="★★★★★"
                  CSS="★★★★★"
                  JS="★★★★★"
                  PHP="★★★★★"
                  MySQL="★★★★☆"
                  Figma="★★★★☆"/>
            </div>
            <div class="container-column">
              <Hobbies
              hobby1="Lecture"
              hobby2="Jeu"
              hobby3="Développement"
          />
          <Formations
            formation1="Bac+3 Développeur fullstack et DevOps - IPSSI - 2022-2023"
            formation2="Bac+2 DUT Métiers du Multimédia et de l'Internet 2020 - 2022"
            formation3="Bac Systèmes Numériques 2018 - 2020"
          />
            </div>
          </div>
          </>
    );
  }
export default Cv;