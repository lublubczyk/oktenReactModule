import { Users } from "./components/Users";


function App() {
    const fetchAdressTask1 = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=5';
    const fetchAdressTask2 = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6';
    return (
        <div>
            <h1>Task 1 </h1>
            <Users  fetchAdress={fetchAdressTask1} />
            <span>==============================</span>
            <h1>Task 2</h1>
            <Users  fetchAdress={fetchAdressTask2} />
        </div>
    );
};

export { App };
