import React from 'react';
import './Feedbacks.css'
import useFeedBack from '../../Hooks/useFeedBack';
import OurFeedBack from '../OurFeedBack/OurFeedBack';

const Feedbacks = () => {
    const [ feedbacks ] = useFeedBack()

    return (
        <div className="container my-5 feedbacks">
                        <h4 className="miniTitle ">Our Traveller Say</h4>
                        <h1 className="headTitle">What Our Traveller Say <br /> About Us</h1>
                <div className="row gy-5">
                     {
                    feedbacks.map(feedback => <OurFeedBack
                        key={ feedback._id }
                        feedback={feedback}
                    ></OurFeedBack>)
                      }
                </div>
        </div>
    );
};

export default Feedbacks;