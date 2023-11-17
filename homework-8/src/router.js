import { createBrowserRouter,Navigate } from 'react-router-dom';

import { MainLayout } from './layouts';
import { CharacterPage, EpisodePage } from './pages';

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'episode?page=1'} /> },
            { path: 'episode', element: <EpisodePage /> },
            { path: 'characters', element: <CharacterPage /> }
        ]
    }
]);

export { router };