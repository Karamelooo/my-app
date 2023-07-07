const Column = ({title, children}) => {
    return(
        <>
            <div class="container-column">
                <h2>{title}</h2>
                <p>
                    {children}
                </p>
            </div>
        </>
    )
}

export default Column;