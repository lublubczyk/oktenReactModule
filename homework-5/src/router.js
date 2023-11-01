import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from './layouts/MainLayout.js';
import { UsersPage } from './pages/UsersPage.js';
import { UserDetailsPage } from "./pages/UserDetailsPage.js";
import { usersServise } from "./services/usersServise.js";
import { PostDetailPage } from "./pages/PostDetailPage.js";
import { commentsServise } from "./services/commentsServise.js";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'users'} /> },
            {
                path: 'users', element: <UsersPage />,
                loader: () => usersServise.getAllUsers()
            },
            {
                path: 'user-details/:id', element: <UserDetailsPage />,
                loader: ({ params: { id } }) => usersServise.getById(id)
            },
            {
                path: 'post-detail/:id', element: <PostDetailPage />,
                loader: (({ params: { id } }) => commentsServise.getPostComments(id))
            }
        ]
    }
]);

export { router };