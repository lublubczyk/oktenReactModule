import { useState } from "react";

import { CreateUserForm } from "./CreateUserForm/CreateUserForm";
import { ShowUsers } from "./ShowUsers/ShowUsers";
import { ShowComments } from "./ShowComments/ShowComments";
import { CreateCommetnsForm } from "./CreateCommentsForm/CreateCommentsForm";


const Task1 = () => {
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    return (
        <div>
            <h1>Task1.1</h1>
            <CreateUserForm setUsers={setUsers} />
            <hr/>
            <ShowUsers users={users} setUsers={setUsers} />
            <hr />
            <h1>Task1.2</h1>
            <ShowComments comments={comments} setComments={setComments} />
            <hr />
            <CreateCommetnsForm setComments={setComments } />
        </div>
    )
};

export { Task1 };