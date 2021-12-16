function Film (props) {
    return (
        <>
            <h2>Title: {props.data.title}</h2>
            <h3>Release Date: {props.data.release_date}</h3>
            <h3>Description: {props.data.description}</h3>
        </>
    )
}


export default Film;