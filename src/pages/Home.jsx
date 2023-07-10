import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <>
            <p>Compteur : {count}</p>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={decrement}>Décrémenter</button>
            <button onClick={reset}>Réinitialiser</button>
        </>
    );
}

const Home = () => {
    return (
        <div className="container">
            <div className="container-column">
                <div className="home-title">
                    <h1>
                        Portfolio
                        <br />
                        Hugo PETIT
                    </h1>
                    <h2 id="title-job">Développeur full-stack</h2>
                </div>
                <p>
                    Je suis un développeur web fullstack passionné, passé par
                    l&apos;IUT de Vélizy et l&apos;école IPSSI, et spécialisé
                    dans la création de sites web. Je vous souhaite la bienvenue
                    sur mon portfolio !
                </p>
                <div className="button-link">
                    <Link to="/Cv">Accéder à mon CV</Link>
                    <br />
                    <Link to="/Cv">Découvrir mes compétences</Link>
                </div>
                <Counter />
            </div>
        </div>
    );
};
export default Home;
