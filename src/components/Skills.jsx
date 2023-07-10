const Skills = (props) => {
    return (
        <>
            <section id="skills">
                <h3>Compétences</h3>
                <ul>
                    {Object.entries(props).map((skill, i) => (
                        <li key={i}>
                            {skill[0]} <span className="level">{skill[1]}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Skills;
