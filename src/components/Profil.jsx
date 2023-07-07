const Profil = (props) => {
    return(
        <>
            <section id="profil">
                <h3>Profil</h3>
                <ul>
                    <li>{`${props.firstname} ${props.lastname}`}</li>
                    <li>{props.age} ans</li>
                    <li>{props.address}</li>
                    <li>{props.phone}</li>
                </ul>
            </section>
        </>
    )
}

export default Profil;