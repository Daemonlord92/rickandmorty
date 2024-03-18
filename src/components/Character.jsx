function Character({name, image, origin}) {
    return (
        <>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <h3>Origin: {origin && origin.name}</h3>
        </>
    )
}

export default Character;