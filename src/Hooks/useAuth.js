import { useContext } from "react"
import { AuthContext } from "../Context/AuthPovider"

//create a hook for using context
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;