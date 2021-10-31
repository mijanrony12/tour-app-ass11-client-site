import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

//create a context
 export const AuthContext= createContext()
const AuthPovider = ({children}) => {
    const allContext=useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPovider;