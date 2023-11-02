import { Navigate, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts';
import { EpisodePage } from './pages';
import {CharactersPage} from './pages'

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'episode'} /> },
            { path: 'episode', element: <EpisodePage /> },
            { path: 'characters', element: <CharactersPage /> }
        ]
    }
]);

export { router };