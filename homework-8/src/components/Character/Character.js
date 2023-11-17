
const Character = ({character}) => {
     
    const {name, image} = character
    
    return (
        <div>
            Character
            <h1>Name: {name}</h1>
            <img src={ image} alt={name} />
        </div>
    )
};

export { Character };