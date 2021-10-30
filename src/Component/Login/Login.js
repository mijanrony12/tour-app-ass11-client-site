import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle,user,setUser } = useFirebase()
    
    const handleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
               setUser(result.user)
             console.log(result.user)
       })
    }
    return (
        <div>
                <Button onClick={handleLogin} variant="outline-dark">Dark</Button>
        </div>
    );
};

export default Login;