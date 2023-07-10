const Column = ({ title, children }) => {
    return (
        <>
            <div className="container-column">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Column;
