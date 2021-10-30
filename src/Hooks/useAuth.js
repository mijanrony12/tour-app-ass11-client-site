import { useContext } from "react"
import { AuthContext } from "../Context/AuthPovider"


const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;