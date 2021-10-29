import axios from "axios"
import { useEffect, useState } from "react"



const usePackage = () => {
   const [ packages, setPackages] = useState([])
    
    useEffect(() => {
        axios('http://localhost:5000/package')
            .then(res => {
            setPackages(res.data)
        })
    }, [])
    return[packages, setPackages]
}

export default usePackage;