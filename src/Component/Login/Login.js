import React from 'react';
import './Login.css'
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle,user,setUser } = useAuth()
    
    const location = useLocation()
    const history = useHistory()
    const redirect_uri=location.state?.from || "/"

    const handleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
               setUser(result.user)
            console.log(result.user)
            history.push(redirect_uri)
       })
    }
    return (
        //implement login system
        <div className="sign">
                <h4 className="miniTitle  mb-4">Please Login in with Your Email address</h4>
            <Button onClick={ handleLogin } variant="outline-dark">Sign In with Google </Button>
           
        </div>
    );
};

export default Login;