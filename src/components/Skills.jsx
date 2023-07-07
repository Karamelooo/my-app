const Skills = (props) => {
    return(
        <>
            <section id="skills">
                <h3>Compétences</h3>
                    <ul>
                        { Object.entries(props).map((skill,i) =>
                        <li>{skill[0]} <span class="level">{skill[1]}</span></li>) }  
                    </ul>
                </section>
        </>
    )
}

export default Skills;