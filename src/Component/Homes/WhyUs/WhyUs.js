import React from 'react';
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className="container whyUs">
              <h4 className="miniTitle ">Why TG</h4>
              <h1  className="headTitle">Why You Are Travel With TG Tour Agency</h1>
                <div className="cards ">
                        <div className="text-center card">
                                <i class="fas fa-user"></i><br />
                                <h3>2000+ Our worldwide guide</h3>
                        </div>
                        <div className="text-center card">
                                <i class="fas fa-handshake"></i>
                                <h3>100% trusted travel agency</h3>
                        </div>
                         <div className="text-center card">
                                 <i class="fas fa-fill-drip"></i>
                                <h3>10+ year of travel experience</h3>
                        </div>
                         <div className="text-center card">
                                 <i class="far fa-smile"></i>
                                <h3>90% of our traveller happy</h3>
                        </div>
               </div>
        </div>
    );
};

export default WhyUs;