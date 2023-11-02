import style from './Character.module.css';

const Character = ({ character }) => {
    
    const { id, name, image } = character;
    return (
        <div className ={style.Character} >
            <div>id:{id}</div>
            <div>name:{name}</div>
            <img src={image} alt={name} />
        </div>
    )
};

export { Character };