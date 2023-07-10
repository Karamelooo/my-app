const Hobbies = (props) => {
    return (
        <>
            <section id="hobbies">
                <h3>Hobbies</h3>
                <ul>
                    {Object.entries(props).map((hobby, i) => (
                        <li key={i}>{hobby[1]}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Hobbies;
