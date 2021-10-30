import axios from "axios";
import { useEffect, useState } from "react";


const useFeedBack = () => {
    const [ feedbacks, setFeedbacks] = useState([])
    
    useEffect(() => {
        axios.get('https://boiling-bastion-33130.herokuapp.com/feedback')
            .then(res => {
            setFeedbacks(res.data)
        })
    }, [])
    return[feedbacks, setFeedbacks]
}

export default useFeedBack;