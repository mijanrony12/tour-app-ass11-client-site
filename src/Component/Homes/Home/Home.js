import React from 'react';
import useFeedBack from '../../../Hooks/useFeedBack';
import usePackage from '../../../Hooks/usePackage';
import OurFeedBack from '../../OurFeedBack/OurFeedBack';
import Package from '../../Package/Package';
import Banner from '../Banner/Banner';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css'
const Home = () => {
    const [ feedbacks ] = useFeedBack()
    const [packages]=usePackage()
    return (
        <div>
            <Banner></Banner>
             
             
            <div className="container my-5 ">
                        <h4 className="miniTitle ">Choose Your Package</h4>
                        <h1 className="headTitle">Select Your Best Package <br /> For Your Travel</h1>
                   <div className="row g-5 gx-5">
                {
                        packages.map(pkg => <Package
                            key={ pkg._id }
                            packages={pkg}
                        ></Package>)
                  }
            </div>
            </div>


            <div className="container my-5 ">
                        <h4 className="miniTitle ">Our Traveller Say</h4>
                        <h1 className="headTitle">What Our Traveller Say <br /> About Us</h1>
                   <div className="row gy-5">
                {
                    feedbacks.slice(0, 3).map(feedback => <OurFeedBack
                        key={ feedback._id }
                        
                       feedback={feedback}
                    ></OurFeedBack>)
                  }
            </div>
            </div>

            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;