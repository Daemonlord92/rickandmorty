import Character from "./Character";

const List = ({data}) => {
    return (
        <>
            <h2>Characters</h2>
            {(data.map((character) => (
                <Character key={character.id} name={character.name} origin={character.origin}
                image={character.image} />
            )))}
        </>
    )
}

export default List;