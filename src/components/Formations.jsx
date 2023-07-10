const Formations = (props) => {
    return (
        <>
            <section id="formations">
                <h3>Formations</h3>
                <ul>
                    {Object.entries(props).map((formation, i) => (
                        <li key={i}>{formation[1]}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Formations;
