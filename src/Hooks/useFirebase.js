import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut   } from "firebase/auth";
import firebaseInitial from "../firebase/firebase.init";

firebaseInitial()
const useFirebase = () => {
    const [ user, setUser ] = useState({})
  const [ error, setError ] = useState('')
  const [isLoading, setIsLoading]=useState(true)
    console.log(user);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
  //google sign in
  const signInUsingGoogle = () => {
         setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message)
      }).finally(() => setIsLoading(false));
    }
//stateonauthChange
    useEffect(() => {
          onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user)
              } else
              {
                setUser({})
            }
            setIsLoading(false)
            });
      },[])
  
  //sign OUt
  const logOut = () => {
         setIsLoading(true)
          signOut(auth).then(() => {
           setUser({})
       }).catch((error) => {
            setError(error.message)
      }).finally(()=> setIsLoading(false))
  }
  
  
  return {
    user,
    setUser,
    signInUsingGoogle,
    error,
    logOut,
    isLoading
  }
}

export default useFirebase;