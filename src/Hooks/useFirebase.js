import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitial from "../firebase/firebase.init";

firebaseInitial()
const useFirebase = () => {
    const [ user, setUser ] = useState([])
    const [error, setError]=useState('')
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
            
         return  signInWithPopup(auth, googleProvider)
           .catch((error) => {
            setError(error.message)
      });

    }

    return {user,setUser, signInUsingGoogle, error}
}

export default useFirebase;