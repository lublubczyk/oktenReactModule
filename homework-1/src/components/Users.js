import { useEffect, useState } from "react";

import { User } from "./User";

const Users = ({ fetchAdress }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(fetchAdress)
            .then(value => value.json())
            .then(setUsers);
    }, [fetchAdress]);
    return (
        <div>
            {users.map((user, index) => <User key={index++} user={user} />)}
        </div>
    )
};

export { Users };

