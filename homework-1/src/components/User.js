const User = ({ user }) => {
    return (
        <div>
            <span>---------------------------------</span>
            <h2>User {user.name || user.character }</h2>
            {Object.keys(user).map((value, ind) => {
                let result;
                if ( typeof user[value] !== 'object' && value !== 'image' ) {
                    result = <h4 key={ind}>{value.toUpperCase()} = {user[value]}</h4>
                } else if(value ==='image') {
                    result = <img key={ind} src={user[value]} alt=""/>
                }
                return result;
            })}
        </div>
    )

}

export { User };