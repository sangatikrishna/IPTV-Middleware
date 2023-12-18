import {createContext} from "react";
const UserContext= createContext(
    {
        loggedInUser:"Admin User"
    }
)
export default UserContext;