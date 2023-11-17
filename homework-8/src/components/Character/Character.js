import style from './Character.module.css';

const Character = ({character}) => {
     
    const {name, image} = character
    
    return (
        <div className={style.Character} >
            <h4>Name: {name}</h4>
            <img src={ image} alt={name} className={style.CharacterImg} />
        </div>
    )
};

export { Character };