import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./layouts";
import { CarsPage, FormPage } from "./pages";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'cars'} /> },
            { path: 'cars', element: <CarsPage /> },
            { path: 'form', element: <FormPage /> }
        ]
    }
]);

export { router };