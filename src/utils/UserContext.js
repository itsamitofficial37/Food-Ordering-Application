import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Amit Singh",
    email : "amitofficial37@gmail.com" 
});

export default UserContext;