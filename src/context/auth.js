import { createContext, useContext, useEffect, useState } from "react";

import * as Keychain from 'react-native-keychain';
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        getUserFromKeyChain()
    }, [])

    const getUserFromKeyChain = async (key) => {
        const credentials = await Keychain.getGenericPassword();
        if (credentials && credentials.username === "token") {
            setUser(jwtDecode(credentials.password))
        }
    }

    const updateUser = async (user) => {
        if(user === null) {
            setUser(null)
            const credentials = await Keychain.getGenericPassword();
            if (credentials && credentials.username === "token") await Keychain.resetGenericPassword()
        } else setUser(user)
    }

    return (    
        <AuthContext.Provider value = {{ user, updateUser }} >
            {children}
        </AuthContext.Provider>
    )
}
