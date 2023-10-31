import { Outlet } from "react-router-dom";

import { UserDetails } from "../components/UserDetails/UserDetails";


const UserDetailsPage = () => {
    return (
        <div>
            <UserDetails />
            <Outlet/>
        </div>
    )
};

export { UserDetailsPage };