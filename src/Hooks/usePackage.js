import axios from "axios"
import { useEffect, useState } from "react"



const usePackage = () => {
   const [ packages, setPackages] = useState([])
    
    useEffect(() => {
        axios('https://boiling-bastion-33130.herokuapp.com/package')
            .then(res => {
            setPackages(res.data)
        })
    }, [])
    return[packages, setPackages]
}

export default usePackage;