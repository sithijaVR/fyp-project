import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { database } from "../pages/FirebaseConfig";

const authContext=createContext()


export default function useAuthContext() {
    return useContext(authContext)
}


export function AuthContextProvider({children}) {
    const [user, setuser] = useState("")

   
      useEffect(() => {
        onAuthStateChanged(database,(_user=>{
            _user ? _user.email && setuser(_user.email):setuser("")
            
          }))
      }, [])
      
   
    
    
    return <authContext.Provider value={user}>
        {children}
    </authContext.Provider>
}