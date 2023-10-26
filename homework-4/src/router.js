import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { TodosPages } from "./pages/TodosPages";
import { AlbumsPages } from "./pages/AlbumsPages";
import { CommentsPages } from "./pages/CommentsPages";
import { PostPages } from "./pages/PostPages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'todos'} /> },
            { path: 'todos', element: <TodosPages /> },
            { path: 'albums', element: <AlbumsPages /> },
            {
                path: 'comments', element: <CommentsPages />, children: [
                    { path: 'post', element: <PostPages /> }
                ]
            }
        ]
    }
    
]);

export { router };