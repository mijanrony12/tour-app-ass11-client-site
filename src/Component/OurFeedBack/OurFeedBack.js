import React from 'react';
import './OurFeedBack.css'
const OurFeedBack = ({ feedback }) => {
    const { name, title, img, details } = feedback;
    return (
        <div className="col-md-6 col-lg-4">
                 <div className="feedback-card">
                        <div>
                             <img src={img} alt="" />
                       </div>
                        <div className="feedback-details">
                            <h2>{ name }</h2>
                            <h3>{ title }</h3>
                            <p>{details}</p>
                       </div>
                 </div>
        </div>
    );
};

export default OurFeedBack;