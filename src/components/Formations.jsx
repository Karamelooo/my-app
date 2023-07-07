const Formations = (props) => {
    return(
        <>
            <section id="formations">
                <h3>Formations</h3>
                    <ul>
                        { Object.entries(props).map((formation,i) =>
                        <li>{formation[1]}</li>) }  
                    </ul>
                </section>
        </>
    )
}

export default Formations;