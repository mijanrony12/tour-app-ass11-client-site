import axios from "axios";
import { useEffect, useState } from "react";


const useFeedBack = () => {
    const [ feedbacks, setFeedbacks] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5000/feedback')
            .then(res => {
            setFeedbacks(res.data)
        })
    }, [])
    return[feedbacks, setFeedbacks]
}

export default useFeedBack;